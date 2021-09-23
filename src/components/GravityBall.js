import React, { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';

function GravityBall (){
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{
        let container = containerRef.current;
        let canvas = canvasRef.current;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        let ctx = canvas.getContext('2d');

        class Circle {
            constructor(x, y, dx, dy, r){
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.r = r;
            }
            gravity = 1;
            friction = 0.9;
            draw(){
                ctx.beginPath();
                ctx.arc(this.x + this.r, this.y + this.r, 30, 0, Math.PI*2);
                ctx.fill();
            }

            update() {
                if(this.y+this.r*2+this.dy > canvas.height) this.dy = -this.dy * this.friction;
                else this.dy += this.gravity;
                if(this.x+this.r*2+this.dx > canvas.width || this.x+this.dx < 0){
                    this.dx = -this.dx * this.friction;
                }
                this.dx *= 0.997;
                this.x += this.dx;
                this.y += this.dy;
                this.draw();
            }
        }

        const init =()=>{
            const arr = [];
            const radius = 30;
            for(let i=0; i<50; i++){
                arr.push( new Circle(
                                Math.random()*(canvas.width-radius*2)+radius,
                                Math.random()*(canvas.height-radius*2)+radius, 
                                Math.random()*30+1, 
                                Math.random()*3, 
                                radius) );
            }
            return arr;
        }
        const balls = init();
        
        let animationFrameId;
        const render = () => {
            ctx.clearRect(0,0,container.offsetWidth, container.offsetHeight);
            balls.forEach(ball => {
                ball.update();
            })
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
        }
    },[])

    return(
        <CanvasContainer containerRef={containerRef} title='Gravity Test' date='9-23-2021'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    )
}

export default GravityBall;