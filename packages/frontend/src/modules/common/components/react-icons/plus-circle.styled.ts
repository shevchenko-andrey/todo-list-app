import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { COLORS } from '../../../theme';

export const PlusCircle = styled(BsFillPlusCircleFill)`
  fill: ${COLORS.secondary};
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    fill: ${COLORS.green};
  }
`;
