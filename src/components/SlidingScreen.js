import React, {useEffect, useState, useRef} from 'react';
import Container from './Container';
import styled from 'styled-components';

function SlidingScreen(){
    const [width, setWidth] = useState(0);

    useEffect(()=>{

    }, []);

    return(
        <Container title='Sliding Screen' date='9-27-2021'>
                <Side bg='orange' color='hotPink'>left</Side>
                <Side bg='hotPink' color='orange'>right</Side>
        </Container>
    );
}

/*const Side = styled.div.attrs(props => ({
    style: {
        width: `${props.width}`
    }
}))*/

const Side = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    font-weight: bold;
    font-family: 'Bebas Neue', cursive;
    font-size: 15vw;
    letter-spacing: 0.25em;
`;

export default SlidingScreen;