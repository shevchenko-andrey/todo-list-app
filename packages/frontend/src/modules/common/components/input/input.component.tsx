import { ErrorMessage, Field } from 'formik';
import React from 'react';
import * as Styled from './input.styled';

interface IInputComponentProps {
  name: string;
  title?: string;
  type?: 'textarea' | 'input' | 'password';
}
export const InputComponent = ({ name, title, type = 'input' }: IInputComponentProps) => (
  <Styled.FildWrapper>
    <Styled.Label htmlFor={name}>{title ?? name}</Styled.Label>
    {type === 'input' && <Styled.FormField id={name} name={name} />}
    {type === 'textarea' && <Field as={Styled.TextArea} id={name} name={name} />}
    {type === 'password' && <Styled.FormField id={name} type={type} name={name} />}
    <ErrorMessage component={Styled.Error} name={name} />
  </Styled.FildWrapper>
);
