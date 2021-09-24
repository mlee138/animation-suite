import React, { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';

function ConnectingLine(){
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(()=>{
        const container = containerRef.current;
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const mouse = {
            x: undefined,
            y: undefined
        }
        const updateMouse =(e)=>{
            mouse.x = e.x;
            mouse.y = e.y;
        }
        window.addEventListener('mousemove', updateMouse);

        const draw = () => {
            //line
            ctx.beginPath();
            const h = Math.sqrt( (mouse.x-width/2)**2 + (mouse.y-height/2)**2);
            const thickness = 1000 / h;
            ctx.lineWidth = thickness > 60 ? 60 : thickness;
            ctx.lineCap = 'round';
            const lightness = h/10+40;
            const saturation = 100/h + 80;
            ctx.strokeStyle = `hsl(250, ${saturation < 100 ? saturation:100}%, ${lightness}%)`;
            ctx.moveTo(width/2,height/2);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.closePath();

            //spinning center
            ctx.beginPath()
            // const startAngle = Math.asin(Math.abs(mouse.x-width)/h)*Math.PI;
            const startAngle = Math.abs(mouse.x-width)/h;
            const endAngle = startAngle + 0.25 *Math.PI;
            ctx.arc(width/2, height/2, 25, startAngle, endAngle);
            ctx.fillStyle = 'black';
            ctx.lineCap = 'square';
            ctx.lineWidth = 6;
            ctx.strokeStyle = 'hsl(250, 69%, 57%)';
            ctx.stroke();
            ctx.closePath();
        }

        const render=()=>{
            ctx.clearRect(0,0,width, height);
            draw();
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', updateMouse);
        }
            
        
    },[])

    return(
        <CanvasContainer containerRef={containerRef} title="Reel it in" date="9-22-2021">
            <canvas ref={canvasRef}></canvas>
        </CanvasContainer>
    )
}

export default ConnectingLine;