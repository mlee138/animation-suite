import React from 'react';
import styled from 'styled-components';

function Container({containerRef, title, subtitle, children, bg='white'}) {
    return(
        <Div ref={containerRef} bg={bg}>
            <TextOverlay>
                <H1>{title}</H1>
                <H3>{subtitle}</H3>
            </TextOverlay>
            {children}
        </Div>
    );
}

const Div = styled.div`
    position: relative;
    background-color: ${({bg}) =>  bg};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0;
    margin:0;
`;

const TextOverlay = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Bebas Neue', cursive;
    color: #ccc;
    mix-blend-mode: difference;

    letter-spacing: 5px;
    text-shadow: 1px 1px 2px #303030;
    text-align: center;
    z-index: 5;
`;

const H1 = styled.h1`
    margin: 0;
    border-bottom: 5px solid #191919;
    font-size: 3rem;
`;

const H3 = styled.h3`
    font-style: italic;
    font-weight: normal;
    font-size: 1rem;
`;


export default Container;

