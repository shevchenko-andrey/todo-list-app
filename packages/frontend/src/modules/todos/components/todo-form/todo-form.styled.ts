import { Field, Form } from 'formik';
import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const TodoForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TodoField = styled(Field)`
  border: 2px solid ${COLORS.black};
  padding: ${SPACES.s};
  border-radius: 4px;
  margin-top: ${SPACES.m};
  width: 17rem;
`;
export const TextArea = styled.textarea`
  resize: none;
  margin-top: ${SPACES.m};
  width: 17rem;
  height: 7rem;
  border: 2px solid ${COLORS.black};
  padding: ${SPACES.s};
`;
export const Label = styled.label`
  margin-top: ${SPACES.m};
`;
export const FildWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Checkbox = styled(Field)``;
export const CheckboxWrapper = styled.label`
  display: flex;
  margin-top: ${SPACES.s};
  width: 100%;
  justify-content: space-between;
`;
export const Error = styled.span`
  padding-top: ${SPACES.s};
  width: 17rem;
  color: ${COLORS.red};
`;
export const Button = styled.button`
  margin-top: ${SPACES.m};
  text-align: center;
  cursor: pointer;
  min-width: 5rem;
  padding: ${SPACES.s};
  display: block;
  color: ${COLORS.black};
  background-color: ${COLORS.btnBackground};
  border: 2px solid ${COLORS.black};
  border-radius: 15px;
  text-decoration: none;
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);

  :hover,
  :focus {
    background-color: ${COLORS.bthBackgroundHover};
    color: ${COLORS.white};
    border-color: ${COLORS.white};
  }
`;
