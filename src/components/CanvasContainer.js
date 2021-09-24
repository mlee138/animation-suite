import React from 'react';
import styled from 'styled-components';

function CanvasContainer({containerRef, title, date, theme="light", children}) {
    
    return(
        <Container 
            style={theme==='light' ? {backgroundColor:'white'} : {backgroundColor:'black'}} 
            ref={containerRef}>
            <TextOverlay>
                <H1>{title}</H1>
                <H3>created: {date}</H3>
            </TextOverlay>
            {children}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    padding: 0;
    margin:0;
`;

const TextOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Bebas Neue', cursive;
    color: #ccc;
    mix-blend-mode: difference;

    letter-spacing: 5px;
    text-shadow: 1px 1px 2px #303030;
    text-align: center;
`;

const H1 = styled.h1`
    border-bottom: 5px solid #191919;
    padding: 1rem;
    font-size: 3rem;
`;

const H3 = styled.h3`
    font-style: italic;
    font-weight: normal;
    font-size: 1.5rem;
`;


export default CanvasContainer;

