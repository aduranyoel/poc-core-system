import styled from '@emotion/styled';
import React from 'react';
import { MenuItem } from '../../domain';

export const StyledNav = styled.nav`
  border-right: 1px dashed rgb(255, 246, 230);
  padding: 30px 20px;

  & .nav-menu-item {
    color: rgb(71, 207, 237);
    list-style: none;
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
      transform: translate(4px);
    }
  }
`;

interface NavComponentProps {
  menuItems: MenuItem[];
}

export const NavComponent = ({ menuItems }: NavComponentProps): JSX.Element => {
  return (
    <StyledNav>
      <ul>
        {menuItems.map((item: MenuItem) => <li className="nav-menu-item" key={item.id} onClick={item.action}>{item.label}</li>)}
      </ul>
    </StyledNav>
  );
};

NavComponent.defaultProps = {
  menuItems: [],
};
