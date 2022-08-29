import { Form } from 'formik';
import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const TodoForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextArea = styled.textarea`
  resize: none;
  margin-top: ${SPACES.m};
  width: 17rem;
  height: 7rem;
  border: 2px solid ${COLORS.black};
  padding: ${SPACES.s};
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
