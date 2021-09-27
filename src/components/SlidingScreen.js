import React, {useEffect} from 'react';
import CanvasContainer from './CanvasContainer';

function SlidingScreen(){
    useEffect(()=>{

    }, []);

    return(
        <CanvasContainer title='Sliding Screen' date='9-27-2021'>
            <div>left</div>
            <div>right</div>
        </CanvasContainer>
    );


}

export default SlidingScreen;