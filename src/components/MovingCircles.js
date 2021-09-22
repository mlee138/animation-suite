import { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';

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
        const colors = ['#D4F1F4', '#75E6DA', '#189AB4', '#05445E']

        class Circle{
            constructor(x, y, dx, dy, r, color) {
                this.x = x;
                this.y = y ;
                this.dx = dx;
                this.dy = dy;
                this.r = r;
                this.originalRadius = r;
                this.color = color;
            }
            
            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.r, 0, Math.PI *2);
                context.fillStyle = this.color;
                context.fill();
            }

            update(){
                const maxRadius = 45;
                const distance = 75;
                if(this.x+this.r > container.offsetWidth || this.x-this.r < 0 ){
                    this.dx *= -1;
                }
                if(this.y+this.r > container.offsetHeight || this.y-this.r < 0){
                    this.dy *= -1;
                }
                this.x += this.dx;
                this.y += this.dy;

                if(mouse.x - this.x < distance && 
                    mouse.x - this.x > -1*distance &&
                    mouse.y - this.y < distance &&
                    mouse.y - this.y > -1*distance
                ) { 
                    if(this.r < maxRadius){
        
                     this.r +=2;
                    }
                } else  {
                    if(this.r > this.originalRadius) {
                        this.r -=2;
                    }	
                }
        
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
        title='Bouncing Circles' 
        date='9-20-2021'
        theme='dark'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    )
}

export default MovingCircles;