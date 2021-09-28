import React, {useEffect, useRef} from 'react';
import Container from './Container';
import styled from 'styled-components';

function CircularMotion(){
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        const halfWidth = canvas.width/2;
        const halfHeight = canvas.height/2;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let speedUp = false;

        const toggleSpeed =()=> speedUp = !speedUp;

        window.addEventListener('mousedown', toggleSpeed);
        window.addEventListener('mouseup', toggleSpeed);


        class Circle{
            constructor(r, color, sa) {
                this.r = r;
                this.color = color;
                this.startAngle = sa;
                this.length = 8;
                this.speed = 0.002;
            }
            
            draw() {
                //might add a gradient to the stroke
                ctx.beginPath();
                const endAngle = this.startAngle+Math.PI * (this.speed*5);
                ctx.arc(halfWidth, halfHeight, this.r, this.startAngle, endAngle);
                ctx.lineCap = 'round';
                ctx.lineWidth = 2;
                ctx.strokeStyle = this.color;
                ctx.stroke();
                ctx.closePath();
            }

            update(){
                const change = 1.01;
                if(speedUp && this.speed < 0.1) 
                    this.speed *= change;
                else if(!speedUp && this.speed > 0.002) 
                    this.speed /= change;
                
                this.startAngle += this.speed;
                this.draw();
            }
        }

        let circles = [];
        const colors = ['#2d6e7f', '#6da3b5', '#24646b', '#18303e', '#0e4c74']
        
        const init=()=>{
            for(let i=0; i<60; i++){
                circles.push( new Circle(Math.random()*500 + 20, 
                                        colors[Math.floor(Math.random()*colors.length)],
                                        Math.random()*Math.PI*2 )
                );
            }
        }
        

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach(circle=> circle.update() )
            animationFrameId = window.requestAnimationFrame(render)
        }
        init()
        render()
        
        return () => {
            window.removeEventListener('mousedown', toggleSpeed);
            window.removeEventListener('mouseup', toggleSpeed);
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return(
        <Container containerRef={containerRef} title='Hold to Warp' date='9-27-2021' bg='black'>
            <Canvas ref={canvasRef}/>
        </Container>
    );


}

const Canvas = styled.canvas`
    display: block;
    margin: 0;
    padding: 0;
`;

export default CircularMotion;