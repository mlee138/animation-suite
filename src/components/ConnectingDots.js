import React, { useEffect, useRef } from 'react';
import { distance } from '../helper/distance';
import Container from './Container';

function ConnectingDots() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        const ctx = canvas.getContext('2d');

        const mouse = {
            x: undefined,
            y: undefined
        }

        const updateMouse =(e)=>{
            mouse.x = e.x;
            mouse.y = e.y;
        }
        window.addEventListener('mousemove', updateMouse);
        window.addEventListener('touchmove', updateMouse);

        class Dot {
            constructor(x, y, dy, r, index){
                this.x = x;
                this.y = y;
                this.dy = dy;
                this.r = r;
                this.index = index;
            }

            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
                ctx.fillStyle = '#faeece';
                ctx.fill();
                ctx.closePath();

                // draw path between dots 
                // is this O(n*log(n))?
                for(let i=this.index+1; i<dots.length; i++){
                    if(distance(this.x, dots[i].x, this.y, dots[i].y) < 50){
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(dots[i].x, dots[i].y);
                        ctx.strokeStyle = '#faeece';
                        ctx.stroke();
                        ctx.closePath();
                    }
                }

                //draw path between dot and mouse
                if(distance(this.x, mouse.x, this.y, mouse.y) < 50){
                    ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = '#faeece';
                        ctx.stroke();
                        ctx.closePath();
                }
            }

            update(dots){
                //move from bottom of screen back to top
                if (this.y-this.r > canvas.height) this.y = -this.r;
                this.y += this.dy;

                this.draw();
            }
        }

        const init=()=>{
            const arr = [];
            const r = 4;
            for(let i=0; i<100;i++){
                arr.push(new Dot(
                                Math.random()*(canvas.width+r*2) - r,
                                Math.random() * canvas.height,
                                Math.random()*0.5,
                                r,
                                i
                            )          
                )
            }
            return arr;
        }
        const dots = init();
        let animationFrameId;
        const render =()=>{
            ctx.clearRect(0,0, canvas.width, canvas.height);
            dots.forEach(dot=>{
                dot.update(dots);
            })
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.removeEventListener('mousemove', updateMouse);
            window.removeEventListener('touchstart', updateMouse);
            window.cancelAnimationFrame(animationFrameId);
        }

    }, []);

    return(
        <Container containerRef={containerRef} title='Connecting Dots' date='9-25-2021' bg='orange'>
            <canvas ref={canvasRef}/>
        </Container>
    );
}

export default ConnectingDots;