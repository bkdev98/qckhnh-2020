import React from 'react'
import styled from 'styled-components'
import {RiHomeLine, RiSearchLine} from 'react-icons/ri'

const Wrapper = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.1);
  width: 100%;
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
  }
  transition: all 0.3s ease;
  :hover {
    background-color: rgba(0,0,0,0.3);
    color: #FFFFFF;
  }
`;

const MenuBar = () => (
  <Wrapper>
    <Section>
      <Item>
        <RiHomeLine />
      </Item>
      <Item>
        <span>qckhnh.com</span>
      </Item>
    </Section>
    <Item>
      <RiSearchLine />
    </Item>
  </Wrapper>
)

export default MenuBar