import React, { useEffect, useRef } from 'react';
import CanvasContainer from './CanvasContainer';
/* INSPIRATION: flashlight in a dark room...
    - mouse tracking
        - "light" follows mouse
    - can find text hidden within dark screen
        - how do you write in canvas?
*/

function Flashlight() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{

    },[])

    return (
        <CanvasContainer containerRef={containerRef} title='Flashlight' date='09-23-2021'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    );
}

export default Flashlight;