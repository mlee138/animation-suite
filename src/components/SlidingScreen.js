import React, {useEffect, useState, useRef} from 'react';
import Container from './Container';
import styled from 'styled-components';

function SlidingScreen(){
    const [width, setWidth] = useState(0);
    
    const containerRef = useRef(null);

    useEffect(()=>{
        const updateMouse=(e)=> setWidth(e.x);
        window.addEventListener('mousemove', updateMouse);
    }, []);

    return(
        <Container containerRef={containerRef} title='Sliding Screen' date='9-27-2021'>
                <Side left='0' right={window.innerWidth - width} bg='#20d684' color='hotPink'>left</Side>
                <Side left={width} right='0' bg='hotPink' color='#20d684'>right</Side>
        </Container>
    );
}

const Side = styled.div.attrs(props => ({
    style: {
        right: props.right,
        left: props.left
    }
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    font-weight: bold;
    font-family: 'Bebas Neue', cursive;
    font-size: 15vw;
    letter-spacing: 0.25em;
    overflow: hidden;
`;

export default SlidingScreen;