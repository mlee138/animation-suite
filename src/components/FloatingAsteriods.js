import React, { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';

/* INSPIRATION: astroid belt featuring...
    - collision
    - balls teleport to opposite sides of screen
    - random sizes + (grayscale) colors
    - starry background?
*/

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
            }
            
            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.r, 0, Math.PI *2);
                context.fillStyle = this.color;
                context.fill();
                context.closePath();
            }

            update(){
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
        
                this.draw();
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
            for(let i=0; i<50; i++){
                const radius = Math.random()*20 + 10;
                circles.push(
                    new Circle(
                        Math.random() * (container.offsetWidth - radius*2) + radius, 
                        Math.random() * (container.offsetHeight - radius*2) + radius,
                        (Math.random() - 0.5) * 1,
                        (Math.random() - 0.5) * 1,
                        radius,
                        colors[Math.floor(Math.random()*colors.length)]
                    )
                );
            }
        }
        

        const render = () => {
            context.clearRect(0, 0, container.offsetWidth, container.offsetHeight);
            stars.forEach(star=> star.draw())
            circles.forEach(circle=> circle.update() )
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
        <CanvasContainer containerRef={containerRef} title='Floating Asteroids' date='09-24-2021' theme='dark'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    );
}

export default FloatingAsteroids;