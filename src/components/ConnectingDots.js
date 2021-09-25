import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { distance } from '../helper/distance';
import CanvasContainer from './CanvasContainer';

function ConnectingDots() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{

    }, []);

    return(
        <CanvasContainer containerRef={containerRef} title='Connecting Dots' date='9-25-2021' bg='orange'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    );
}

export default ConnectingDots;