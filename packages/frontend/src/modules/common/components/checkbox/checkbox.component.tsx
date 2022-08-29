import React from 'react';
import * as Styled from './checkbox.styled';
import * as Input from '../input';

interface ICheckboxComponentProps {
  title?: string;
  name: string;
}
export const CheckboxComponent = ({ name, title }: ICheckboxComponentProps) => (
  <Styled.CheckboxWrapper>
    <Input.Label htmlFor={name}>{title ?? name}</Input.Label>
    <Styled.Checkbox name={name} id={name} type="checkbox" />
  </Styled.CheckboxWrapper>
);
