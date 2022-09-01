import React from 'react';

import { NavLinkComponent } from '../../../common/components/nav-link';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import * as Styled from './todo-menu.styled';

interface ITodoMenuProps {
  onHandleFilter: () => void;
  isFilterOut: boolean;
}

export const TodoMenuComponent = ({ onHandleFilter, isFilterOut }: ITodoMenuProps) => (
  <Styled.ButtonGroup>
    <NavLinkComponent to={ROUTER_KEYS.CREATE_TODO}>
      <Styled.PlusCircle size={30} title="Create todo" />
    </NavLinkComponent>
    <Styled.Button type="button" onClick={onHandleFilter}>
      {isFilterOut ? <Styled.FilterOff size={30} /> : <Styled.FilterAlt size={30} />}
    </Styled.Button>
  </Styled.ButtonGroup>
);
