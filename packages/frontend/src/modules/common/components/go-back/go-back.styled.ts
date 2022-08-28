import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const IconWrapper = styled.div`
  display: flex;

  align-items: center;
  transition: color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    color: ${COLORS.orenge};
  }
`;
export const IconDescription = styled.p``;
