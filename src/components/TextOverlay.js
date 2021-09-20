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

    text-shadow: 1px 1px 2px #303030;
    text-align: center;
`;

const H1 = styled.h1`
    border-bottom: 5px solid #191919;
    padding: 1rem;
`;

const H3 = styled.h3`
    font-style: italic;
    font-weight: normal;
`;

export default TextOverlay;