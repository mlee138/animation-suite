import styled from 'styled-components';
import CanvasContainer from './CanvasContainer';
import TextOverlay from './TextOverlay';



function ShrinkingBackground(){
    return (
        <CanvasContainer>
            <TextOverlay title='Shrinking Background' date='9-20-2021'/>
            <canvas/>
        </CanvasContainer>
    )
}

export default ShrinkingBackground;