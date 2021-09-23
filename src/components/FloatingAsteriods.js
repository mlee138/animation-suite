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

    },[])

    return (
        <CanvasContainer containerRef={containerRef} title='Floating Asteroids' date='09-23-2021'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    );
}

export default FloatingAsteroids;