import React from 'react';

import * as Styled from './nav-link.styled';

interface INavLinkProps {
  title?: string;
  to: string;
  children?: any;
}

export const NavLinkComponent = ({ title = '', to, children }: INavLinkProps) => (
  <Styled.NavigationLink title={title} to={to}>
    {title}
    {children && <Styled.Wrapper>{children}</Styled.Wrapper>}
  </Styled.NavigationLink>
);
