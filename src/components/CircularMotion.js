import React, {useEffect, useRef} from 'react';
import CanvasContainer from './CanvasContainer';

function CircularMotion(){
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(()=>{

    }, []);

    return(
        <CanvasContainer containerRef={containerRef} title='Around The World' date='9-27-2021'>
            <canvas ref={canvasRef}/>
        </CanvasContainer>
    );


}

export default CircularMotion;