import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import {useNavigate} from '@reach/router'

const Wrapper = styled.div`
  min-height: 200px;
  min-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #EED4CE;
  z-index: 10;
  position: absolute;
  border: 2px solid rgba(0,0,0,0.2);
`;

const TitleBar = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.1);
  width: 100%;
  padding: 0px 10px;
  position: relative;
  span {
    text-align: center;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    font-weight: 700;
    width: 100%;
    cursor: default;
  }
`;

const FrameAction = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #FC625D;
  left: 10px;
  cursor: pointer;
  :hover {
    background-color: #C44541;
  }
`;

const Content = styled.div`

`;

const AppFrame = ({name}) => {
  const navigate = useNavigate();

  function handleClose() {
    navigate('../', {replace: true});
  }

  return (
    <Draggable defaultPosition={{x: 200, y: 100}}>
      <Wrapper>
        <TitleBar>
          <FrameAction onClick={handleClose} />
          <span>{name}</span>
        </TitleBar>
        <Content>
  
        </Content>
      </Wrapper>
    </Draggable>
  );
}

export default AppFrame;
