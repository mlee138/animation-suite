import { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';
import { distance } from '../helper/distance';

function MovingCircles(){
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
        const colors = [
            { r:212, g:241, b:244, a:0 },
            { r:117, g:230, b:218, a:0 },
            { r:24, g:154, b:180, a:0 },
            { r:5, g:68, b:94, a:0 },
        ]

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
                context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
                context.fill();
                context.strokeStyle = 'white';
                context.stroke();
                context.closePath();
            }

            update(){
                //bounce off sides
                if(this.x+this.r > container.offsetWidth || this.x-this.r < 0 ){
                    this.dx *= -1;
                }
                if(this.y+this.r > container.offsetHeight || this.y-this.r < 0){
                    this.dy *= -1;
                }
                this.x += this.dx;
                this.y += this.dy;

                // change alpha based on distance
                const minDistance = 150;
                const dist = distance(this.x, mouse.x, this.y, mouse.y);
                if(dist < minDistance) this.color.a = (minDistance - dist)/minDistance;
                else this.color.a = 0;
                this.draw();
            }
        }

        const init=()=>{
            let circles = [];
            for(let i=0; i<100; i++){
                const radius = Math.random()*25 + 5;
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
            return circles;
        }
        let circles = init();

        const render = () => {
            context.clearRect(0, 0, container.offsetWidth, container.offsetHeight);
            circles.forEach(circle=>{
                circle.update();
            })
            animationFrameId = window.requestAnimationFrame(render)
          }
        render()
        
        return () => {
            window.removeEventListener('mousemove', updateMouse);
            window.cancelAnimationFrame(animationFrameId);
        }
    
    }, []);

    return (
        <CanvasContainer 
        containerRef={containerRef} 
        title='Floating Circles' 
        date='9-20-2021'
        bg='black'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    )
}

export default MovingCircles;