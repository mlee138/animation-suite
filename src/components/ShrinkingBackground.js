import { useEffect, useRef } from 'react';
import Container from './Container';

function ShrinkingBackground(){
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
            constructor(x, y, r, color) {
                this.x = x;
                this.y = y ;
                this.r = r;
                this.originalRadius = r;
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
                const minRadius = 5;
                const distance = 50;

                if(mouse.x - this.x < distance && 
                    mouse.x - this.x > -1*distance &&
                    mouse.y - this.y < distance &&
                    mouse.y - this.y > -1*distance
                ) { 
                    if(this.r > minRadius){
        
                     this.r -=2;
                    }
                } else  {
                    if(this.r < this.originalRadius) {
                        this.r +=2;
                    }	
                }
        
                this.draw();
            }
        }

        const init=()=>{
            let circles = [];
            let x = 0;
            let y = 0;
            let gap = 5;
            let radius = 30
            let alt = true;
            while(x < canvas.width && y < canvas.height){
                circles.push( new Circle(x, y, radius, colors[Math.floor(Math.random()*colors.length)]) );
                x += radius * 2 + gap;
                if(x > canvas.width){
                    alt ? x=radius : x=0;
                    alt = !alt;
                    y += radius * 2;
                }
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
        <Container containerRef={containerRef} title='Shrinking Background' subtitle='big ball go small' >
            <canvas ref={canvasRef}/>
        </Container>
    )
}

export default ShrinkingBackground;