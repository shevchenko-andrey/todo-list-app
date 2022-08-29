import React from 'react';
import * as Styled from './container.styled';

interface IContainerProps {
  children?: JSX.Element[] | JSX.Element | any;
}
export const ContainerComponent = ({ children }: IContainerProps) => (
  <Styled.Container>{children}</Styled.Container>
);
