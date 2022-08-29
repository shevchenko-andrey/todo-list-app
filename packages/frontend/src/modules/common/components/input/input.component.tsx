import { ErrorMessage } from 'formik';
import React from 'react';
import * as Styled from './input.styled';

interface IInputComponentProps {
  name: string;
  title?: string;
  type?: 'textarea' | 'input';
}
export const InputComponent = ({ name, title, type = 'input' }: IInputComponentProps) => (
  <Styled.FildWrapper>
    <Styled.Label htmlFor={name}>{title ?? name}</Styled.Label>
    {type === 'input' && <Styled.FormField id={name} name={name} />}
    {type === 'textarea' && <Styled.TextArea id={name} name={name} />}
    <ErrorMessage component={Styled.Error} name={name} />
  </Styled.FildWrapper>
);
