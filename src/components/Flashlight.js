import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
/* NOTE: it does NOT work with scroll*/

function Flashlight() {
    const [mouseX, setMouseX] = useState(100);
    const [mouseY, setMouseY] = useState(100);
    useEffect(()=>{
        const updateMouse =(e)=>{
            setMouseX(e.x);
            setMouseY(e.y);
        }

        window.addEventListener('mousemove', updateMouse);

        return ()=>{
            window.removeEventListener('mousemove', updateMouse);
        }
    },[mouseX, mouseY])

    return (
        <Container title='Flashlight' date='09-27-2021'>
            <P x={mouseX} y={mouseY}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum elementum enim vel auctor. In hac habitasse platea dictumst. Pellentesque vehicula ex ac velit vulputate tincidunt. Curabitur laoreet ipsum non lectus ullamcorper luctus. Pellentesque cursus varius velit, vitae interdum tortor. Aliquam in ipsum dignissim, interdum tellus sit amet, rhoncus tellus. Duis posuere condimentum arcu. Duis pellentesque pulvinar libero, ac lobortis eros suscipit vitae. Aenean id mattis est. Curabitur lobortis lorem neque. Phasellus odio sapien, rutrum faucibus dui eu, aliquet accumsan ipsum. Praesent neque nisi, iaculis vel odio at, vestibulum venenatis velit. Donec quam ex, faucibus sit amet tellus vel, scelerisque venenatis dolor. Sed bibendum accumsan ipsum, at euismod sem ultricies vel.

Duis at sem a ipsum fringilla dignissim. Nullam vulputate fringilla ultricies. Cras a nunc porta ipsum lobortis sagittis. Morbi consectetur vel felis id blandit. Donec id enim vel sem volutpat vulputate. Suspendisse in commodo enim. Maecenas sed dui ipsum. Duis ultrices efficitur venenatis. Sed pellentesque nec metus nec mollis. Donec accumsan varius ex. Suspendisse suscipit aliquet erat ut vestibulum. Nunc sit amet mi ornare eros tincidunt vehicula. Ut non risus nec risus varius interdum.

Nam quis nibh vitae sapien blandit commodo a nec massa. In eget ipsum vel quam porttitor venenatis ut at ex. Proin tempus nibh ac lacus vehicula accumsan. Morbi nibh nisi, ornare ac urna at, aliquet tincidunt arcu. Pellentesque euismod vehicula consectetur. Ut a mi est. Nullam volutpat ornare eleifend. In condimentum iaculis ornare.

Etiam non lacus eget justo finibus efficitur at id mauris. Phasellus efficitur ultricies sem, ut interdum elit pretium at. Sed sit amet mauris et lectus gravida placerat. Curabitur dapibus risus ex, eu elementum libero suscipit vel. Maecenas ac rutrum lectus. Etiam eget neque interdum, tincidunt tortor sed, auctor arcu. Nulla accumsan, felis ut maximus rhoncus, ex leo dictum sapien, nec dignissim ex erat non sapien. Etiam hendrerit nisl nisi. Phasellus placerat sagittis ligula, quis gravida nibh aliquet vel. Sed tempus dapibus mauris, sed tincidunt quam. Vestibulum non euismod libero. Suspendisse sed semper enim. Nam ultrices, eros quis aliquet efficitur, neque tellus volutpat risus, in elementum ipsum magna et metus. Sed condimentum maximus erat, quis suscipit ante tincidunt sed.

Ut eu ex eleifend, volutpat metus eleifend, porttitor nisl. Mauris et nisl ex. Donec in velit orci. Donec rutrum rhoncus ullamcorper. Praesent ultrices, libero et cursus blandit, tellus ante rhoncus ligula, nec varius turpis diam sit amet elit. Suspendisse vel eleifend neque. Aenean condimentum mattis leo, ac faucibus tortor sodales vitae. Sed diam sem, mollis sit amet suscipit in, pharetra sit amet magna. Donec tincidunt pellentesque rutrum. Aliquam dictum dui vel odio maximus vulputate. Integer eu tellus vel quam tincidunt auctor nec in felis. Praesent dapibus mollis odio a volutpat. Pellentesque volutpat magna in elit fringilla efficitur. Maecenas ac varius augue. Suspendisse lobortis velit augue, ac fringilla est maximus eget. Nulla a magna porttitor nisi fermentum tempus nec a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum elementum enim vel auctor. In hac habitasse platea dictumst. Pellentesque vehicula ex ac velit vulputate tincidunt. Curabitur laoreet ipsum non lectus ullamcorper luctus. Pellentesque cursus varius velit, vitae interdum tortor. 
            </P>
        </Container>
    );
}

const P = styled.p.attrs(props => ({
    style: {
        background:` radial-gradient(circle 10vmax at ${props.x}px ${props.y}px,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.5) 80%,
            rgba(0,0,0,.95) 100%
        )`
    }
}))`
position: relative;
margin: 0;
&::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    
}
`;

export default Flashlight;
