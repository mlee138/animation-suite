import { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';

function ShrinkingBackground(){
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const colors = ['#D4F1F4', '#75E6DA', '#189AB4', '#05445E']


    useEffect(()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        const context = canvas.getContext('2d');
        let animationFrameId;
        let frameCount;
    
    }, []);

    return (
        <CanvasContainer containerRef={containerRef} title='Shrinking Background' date='9-20-2021'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    )
}

export default ShrinkingBackground;