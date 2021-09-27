import React from 'react';
import styled from 'styled-components';
import useIndex from "./hooks/useIndex";
import { 
  NavBarUnderline, 
  MovingCircles,
  ShrinkingBackground,
  ConnectingLine,
  GravityBall,
  FloatingAsteroids,
  Flashlight,
  ConnectingDots,
  CircularMotion,
  SlidingScreen
} from './componentExport';

function App() {
  const pages = [
    <CircularMotion/>,
    <ConnectingDots/>,
    <MovingCircles/>,
    <ShrinkingBackground/>,
    <ConnectingLine/>,
    <GravityBall/>,
    <FloatingAsteroids/>,
    <Flashlight/>,
    <NavBarUnderline/>,
  ];
  const [ value, increment, decrement ] = useIndex(0, pages.length);  

  return (
    <Container>
      <Arrow className="left" onClick={decrement}>&lt;</Arrow>
      {pages[value]}
      <Arrow className="right" onClick={increment}>&gt;</Arrow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .left {
    left:0;
  }

  .right {
    right: 0;
  }
`;

const Arrow = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  border: none;
  padding: 0.5rem;
  box-sizing: border-box;
  background: rgba(80, 80, 80, 0.25);
  font-weight: bold;
  font-size: 3em;
  opacity: 0.5;
  color: white;
  mix-blend-mode: difference;
  z-index: 5;

  transition: all 0.2s ease-in-out;
  
  &:hover {
    opacity: 1;
    background: rgba(80, 80, 80, 0.8);
  }
`;

export default App;
