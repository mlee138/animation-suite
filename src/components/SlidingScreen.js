import React, {useEffect, useState, useRef} from 'react';
import Container from './Container';
import styled from 'styled-components';

function SlidingScreen(){
    const [width, setWidth] = useState(0);

    useEffect(()=>{

    }, []);

    return(
        <Container title='Sliding Screen' date='9-27-2021'>
                <Side>left</Side>
                <Side>right</Side>
        </Container>
    );
}


const Side = styled.div`
    display: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export default SlidingScreen;