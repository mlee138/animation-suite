import React from "react";
import styled from "styled-components";

function TextOverlay({title, date}){
    return (
        <Container>
            <H1>{title}</H1>
            <H3>created: {date}</H3>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const H1 = styled.h1`
    border-bottom: 5px solid black;
    padding: 1rem;
    color: black;
    text-shadow; 2px 2px 2px solid black;
    text-align: center;
`;

const H3 = styled.h3`
    color: black;
    text-shadow; 2px 2px 2px solid black;
    text-align: center;
    font-style: italic;
    font-weight: normal;
`;

export default TextOverlay;