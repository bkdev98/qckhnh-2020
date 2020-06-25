import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import {useNavigate} from '@reach/router'

import useWindowSize from '../utils/useWindowSize'

const Wrapper = styled.div`
  width: 80vw;
  height: 60vh;
  max-width: 600px;
  max-height: 400px;
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

const AppFrame = ({name, children}) => {
  const navigate = useNavigate();
  const size = useWindowSize();
  const [position, setPosition] = useState(size.width > 680 ? {x: (size.width - 600) / 2, y: 40} : {x: 40, y: 40});

  useEffect(() => {
    setPosition(size.width > 680 ? {x: (size.width - 600) / 2, y: 40} : {x: 40, y: 40});
  }, [size.width]);

  function handleClose() {
    navigate('../', {replace: true});
  }

  function handleStop(e, pos) {
    setPosition(pos);
  }

  return (
    <Draggable position={position} onStop={handleStop}>
      <Wrapper>
        <TitleBar>
          <FrameAction onClick={handleClose} />
          <span>{name}</span>
        </TitleBar>
        <Content>
          {children}
        </Content>
      </Wrapper>
    </Draggable>
  );
}

export default AppFrame;
