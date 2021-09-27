import React, { useEffect, useRef } from 'react';
import Container from './Container';
import { distance } from '../helper/distance'
import { resolveCollision } from '../helper/util-elastic-collision'

function FloatingAsteroids() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{
        let mouse = {
            x: undefined,
            y: undefined
        };
        function updateMouse(e){
            mouse.x = e.x;
            mouse.y = e.y;
        }
        window.addEventListener('mousemove', updateMouse);

        const canvas = canvasRef.current;
        const container = containerRef.current;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        const context = canvas.getContext('2d');
        let animationFrameId;

        class Circle{
            constructor(x, y, dx, dy, r, color) {
                this.x = x;
                this.y = y ;
                this.dx = dx;
                this.dy = dy;
                this.r = r;
                this.color = color;
                this.mass = 1;
            }
            
            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.r, 0, Math.PI *2);
                context.fillStyle = this.color;
                context.fill();
                context.closePath();
            }

            update(circles){
                this.draw();
                for(let i=0; i < circles.length; i++){
                    if(this === circles[i]) continue;
                    const combinedRadius = this.r + circles[i].r;
                    if (distance(this.x, circles[i].x, this.y, circles[i].y) - combinedRadius < 0){
                        resolveCollision(this, circles[i]);
                    }
                }
                if(this.x-this.r > container.offsetWidth) 
                    this.x = 0-this.r;
                if( this.x+this.r < 0 ) 
                    this.x = canvas.width+this.r;
                if(this.y-this.r > container.offsetHeight) 
                    this.y = 0-this.r;
                if(this.y+this.r < 0)
                    this.y = canvas.height + this.r;
                this.x += this.dx;
                this.y += this.dy;
            }
        }

        class Star {
            constructor(x,y,r, color){
                this.x = x;
                this.y = y;
                this.r = r;
                this.color = color;
            }

            draw(){
                context.beginPath();
                context.arc(this.x, this.y, this.r, 0, Math.PI*2);
                context.fillStyle = this.color;
                context.fill();
            }
        }

        let circles = [];
        let stars = [];
        const colors = ['#EEEEEE', '#CCCCCC', '#999999', '#666666'];
        // const starColors = ['#574e56', '#747682', '#1c2c33', '#2c3434'];
        const starColors = ['#39586f', '#585052', '#7e8489', '#b7c7d4'];
        
        const init=()=>{
            for(let i=0; i<50; i++){
                stars.push(
                    new Star(
                        Math.random()*canvas.width, 
                        Math.random()*canvas.height,
                        Math.random()*2+0.5,
                        starColors[Math.floor(Math.random()*starColors.length)])
                );
            }
            for(let i=0; i<40; i++){
                const radius = Math.random()*30 + 10;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                if(i !== 0){
                    for(let j=0; j < circles.length; j++){
                        const combinedRadius = radius + circles[j].r;
                        if (distance(x, circles[j].x, y, circles[j].y) - combinedRadius < 0){
                            x = Math.random() * canvas.width;
                            y = Math.random() * canvas.height;
                            j -= 1;
                        }
                    }
                }
                circles.push(
                    new Circle(
                        x, 
                        y,
                        (Math.random()-0.5) * 1,
                        (Math.random()-0.5) * 1,
                        radius,
                        colors[Math.floor(Math.random()*colors.length)]
                    )
                );
                
            }
        }
        

        const render = () => {
            context.clearRect(0, 0, container.offsetWidth, container.offsetHeight);
            stars.forEach(star=> star.draw())
            circles.forEach(circle=> circle.update(circles) )
            animationFrameId = window.requestAnimationFrame(render)
        }
        init()
        render()
        
        return () => {
            window.removeEventListener('mousemove', updateMouse);
            window.cancelAnimationFrame(animationFrameId);
        }
    },[])

    return (
        <Container containerRef={containerRef} title='Floating Asteroids' date='09-24-2021' bg='black'>
            <canvas ref={canvasRef}/>
        </Container>
    );
}

export default FloatingAsteroids;