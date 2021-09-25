import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { distance } from '../helper/distance';
import CanvasContainer from './CanvasContainer';

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

        class Dot {
            constructor(x, y, dy, r){
                this.x = x;
                this.y = y;
                this.dy = dy;
                this.r = r;
            }

            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
                ctx.fillStyle = '#faeece';
                ctx.fill();
                ctx.closePath();
            }

            update(){
                if (this.y-this.r > canvas.height) this.y = -this.r;
                this.y += this.dy;

                this.draw();
            }
        }

        const init=()=>{
            const arr = [];
            const r = 5;
            for(let i=0; i<30;i++){
                arr.push(new Dot(
                                Math.random()*(canvas.width+r*2) - r,
                                Math.random() * canvas.height,
                                Math.random()*1,
                                r 
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
                dot.update();
            })
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.removeEventListener('mousemove', updateMouse);
            window.cancelAnimationFrame(animationFrameId);
        }

    }, []);

    return(
        <CanvasContainer containerRef={containerRef} title='Connecting Dots' date='9-25-2021' bg='orange'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    );
}

export default ConnectingDots;