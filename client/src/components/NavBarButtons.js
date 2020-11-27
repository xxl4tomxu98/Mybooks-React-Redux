import React from 'react';
import NavBarLink from './NavBarLink';
import styled from 'styled-components';

const NavBarButtonsWrapper = styled.div`
  display: flex;
  vertical-align: top;
  margin: 0 15px;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
`;

const NavBarButtons = () => {
  return (
    <NavBarButtonsWrapper>
      <NavBarLink
        path={'/shelves'}
        text={"Home"}/>
      <NavBarLink
        path={'/books'}
        text={"Browse"}/>
    </NavBarButtonsWrapper>
  )
}

export default NavBarButtons;
