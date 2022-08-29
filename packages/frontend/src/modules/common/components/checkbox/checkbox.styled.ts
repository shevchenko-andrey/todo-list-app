import { Field } from 'formik';
import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const Checkbox = styled(Field)``;
export const CheckboxWrapper = styled.label`
  display: flex;
  margin-top: ${SPACES.s};
  width: 100%;
  justify-content: space-between;
`;
