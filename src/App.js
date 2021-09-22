import React from 'react';
import styled from 'styled-components';
import useIndex from "./hooks/useIndex";
import { 
  NavBarUnderline, 
  Parallax,
  MovingCircles,
  ShrinkingBackground
} from './componentExport';

function App() {
  const pages = [
    <NavBarUnderline/>, 
    <Parallax/>,
    <MovingCircles/>,
    <ShrinkingBackground/>
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
  min-height: 100vh;

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
  background: none;
  font-weight: bold;
  font-size: 3em;
  opacity: 0.5;
  mix-blend-mode: darken;

  transition: all 0.2s ease-in-out;
  
  &:hover {
    opacity: 1;
    background-color: hsla(255, 100%, 0%, 0.1);
  }
`;

export default App;
