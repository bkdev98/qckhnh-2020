import React, {useState} from 'react'
import styled from 'styled-components'
import {RiBearSmileLine, RiSearchLine} from 'react-icons/ri'
import { useLocation, useNavigate } from "@reach/router"
import Popover from 'react-tiny-popover'

const Wrapper = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.1);
  padding: 0px 10px;
`;

const Section = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  height: 25px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0,0,0,0.8);
  cursor: pointer;
  span {
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
  }
  transition: all 0.3s ease;
  :hover {
    background-color: rgba(0,0,0,0.3);
    color: #FFFFFF;
  }
`;

const PopoverContent = styled.div`
  background-color: #EED4CE;
  border: 2px solid rgba(0,0,0,0.2);
  padding: 2px 0px;
  border-radius: 5px;
  li {
    list-style-type: none;
    font-size: 14px;
    line-height: 26px;
    color: rgba(0,0,0,0.7);
    margin-bottom: 0px;
    padding: 0px 10px;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background-color: rgba(0,0,0,0.3);
      color: #FFFFFF;
    }
  }
  hr {
    background-color: rgba(0,0,0,0.2);
    height: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;

const MenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isAppPopoverOpen, setIsAppPopoverOpen] = useState(false);
  
  function handleQuitApp() {
    setIsAppPopoverOpen(false);
    navigate('../', {replace: true});
  }

  return (
    <Wrapper>
      <Section>
        <Popover
          isOpen={isPopoverOpen}
          position='bottom'
          padding={2}
          onClickOutside={() => setIsPopoverOpen(false)}
          align='start'
          content={<PopoverContent>
            <li>About This Site</li>
            <hr />
            <li>System References</li>
            <li>App Store...</li>
            <hr />
            <li>Shut Down...</li>
          </PopoverContent>}
        >
          <Item onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            <RiBearSmileLine />
          </Item>
        </Popover>
        {location.pathname.split('/')?.[1] && (
          <Popover
            isOpen={isAppPopoverOpen}
            position='bottom'
            padding={2}
            onClickOutside={() => setIsAppPopoverOpen(false)}
            align='start'
            content={<PopoverContent>
              <li onClick={handleQuitApp}>Quit {location.pathname.split('/')?.[1]}</li>
            </PopoverContent>}
          >
            <Item onClick={() => setIsAppPopoverOpen(!isAppPopoverOpen)}>
              <span>{location.pathname.split('/')?.[1]}</span>
            </Item>
          </Popover>
        )}
      </Section>
      <Item>
        <RiSearchLine />
      </Item>
    </Wrapper>
  )
}

export default MenuBar
