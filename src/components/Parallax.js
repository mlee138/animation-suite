import React from 'react';
import styled from 'styled-components';
import ImgSrc from '../images/snow_mountain.jpg';

function Parallax(){
    return (
        <Container>
            <ParallaxContainer>
                <Background>
                    <img src={ImgSrc} alt="starlit snowy mountain"/>
                </Background>
                <Foreground>
                    <h1>Hello there</h1>
                </Foreground>
            </ParallaxContainer>
            <Section/>
            <ParallaxEasy/>
            <Section>
                <a href="https://www.pexels.com/photo/mountain-covered-snow-under-star-572897/" target='_blank' rel="noreferrer">Photo by eberhard grossgasteiger from Pexels</a>
                <p>The first type of parallax where the background image is fixed in place</p>
            </Section>
            
            <Section>
                hello
            </Section>
        </Container>
        
    )
}

const Container = styled.div`
    width: 80%;
`;

const ParallaxEasy = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${ImgSrc});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    perspective: 8px;
`;

const Section = styled.div`
    text-align: center;
    background-color: #f3f3f3;
    width: 100%;
    height: 400px;
`;

const ParallaxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 8px;
    perspective-origin: 0%;
    display: flex;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateZ(0px);
`;

const Foreground = styled.div`
    margin-top: auto;
    margin-bottom: 50px;
    z-index: 10;
    transform-origin: 0;
    transform: translateZ(3px) scale(0.625);
    border: 2px solid blue;
`;

//(perspective — distance) / perspective = scaleFactor

export default Parallax;