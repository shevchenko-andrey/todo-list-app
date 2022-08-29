import styled from 'styled-components';
import { Field } from 'formik';
import { COLORS, SPACES } from '../../../theme';

export const FildWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin-top: ${SPACES.m};
`;
export const FormField = styled(Field)`
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

export const Error = styled.span`
  padding-top: ${SPACES.s};
  width: 17rem;
  color: ${COLORS.red};
`;
