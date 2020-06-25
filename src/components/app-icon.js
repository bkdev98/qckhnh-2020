import React, {useState} from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'
import {RiFolderLine, RiFolderOpenLine} from 'react-icons/ri'
import {useMatch, useNavigate} from '@reach/router'

import useAppStore from '../store/app'

const Wrapper = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  span {
    margin-top: 5px;
    font-size: 12px;
    color: rgba(0,0,0,0.8);
    text-align: center;
    font-weight: 600;
    width: 60px;
    line-height: 14px;
  }
`;

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid rgba(0,0,0,0.2);
  background-color: ${props => props.active ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.04)'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  ${Wrapper}:hover & {
    background-color: rgba(0,0,0,0.08);
  }
  svg {
    color: rgba(0,0,0,0.8);
    width: 22px;
    height: 22px;
  }
`;

const AppIcon = ({label, icon, iconActive, position, url}) => {
  const [dragging, setDragging] = useState(false);
  const match = useMatch(url);
  const navigate = useNavigate();
  const updatePosition = useAppStore(state => state.updatePosition);

  function handleDrag() {
    setDragging(true);
  }

  function handleStop(e, position) {
    updatePosition(url, {x: position.x, y: position.y});
    if (dragging) {
      setDragging(false);
    } else {
      match === null ? navigate(url) : navigate('../', {replace: true});
    }
  }

  return (
    <Draggable
      position={position}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <Wrapper>
        <Container active={match !== null}>
          {match !== null ? (iconActive || icon || <RiFolderOpenLine />) : (icon || <RiFolderLine />)}
        </Container>
        <span>{label}</span>
      </Wrapper>
    </Draggable>
  );
}

export default AppIcon;
