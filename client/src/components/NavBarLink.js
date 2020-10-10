import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const NavBarLinkWrapper = styled.div`
  .link {
    font-size: 16px;
    padding: 12px 24px;
    appearance: none;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #382110;
    background-color: #f4f1ea;
    line-height: 50px;
    font-weight: bold;
    font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
    padding: 0 15px;
  }
  .link:hover {
    color: #FFFFFF;
    background-color: #382110;
    outline: 0;
  }
`;

// Question about how I am passing in the handle
// prop. Is this the best way to do it. Is it ok
// to have it evaluate to undefined for all but
// the logout link?

const NavBarLink = (props) => {
  return (
    <NavBarLinkWrapper>
      <NavLink
          className='link'
          onClick={props.handle}
          to = {props.path ? props.path : null}
      >
        {props.text}
      </NavLink>
    </NavBarLinkWrapper>
  )
}

export default NavBarLink;
