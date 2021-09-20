import React from 'react';
import styled from 'styled-components';

function CanvasContainer({children}) {
    return(
        <Container>
            {children}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`;

export default CanvasContainer;

