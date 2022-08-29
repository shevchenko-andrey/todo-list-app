import { ErrorMessage } from 'formik';
import React from 'react';
import * as Styled from './input.styled';

interface IInputComponentProps {
  name: string;
  title?: string;
}
export const InputComponent = ({ name, title }: IInputComponentProps) => (
  <Styled.FildWrapper>
    <Styled.Label htmlFor={name}>{title ?? name}</Styled.Label>
    <Styled.FormField id={name} name={name} />
    <ErrorMessage component={Styled.Error} name={name} />
  </Styled.FildWrapper>
);
