import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import * as Styled from './go-back.styled';

export const GoBackComponent = () => (
  <Styled.IconWrapper>
    <MdArrowBack size={40} />
    <Styled.IconDescription>Go back to the main page</Styled.IconDescription>
  </Styled.IconWrapper>
);
