import styled from 'styled-components';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { RiFilterOffFill } from 'react-icons/ri';
import { MdFilterAlt } from 'react-icons/md';
import { COLORS } from '../../../theme';

export const PlusCircle = styled(BsFillPlusCircleFill)`
  fill: ${COLORS.secondary};
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    fill: ${COLORS.green};
  }
`;

export const FilterAlt = styled(MdFilterAlt)`
  fill: ${COLORS.secondary};
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    fill: ${COLORS.blue};
  }
`;
export const FilterOff = styled(RiFilterOffFill)`
  fill: ${COLORS.secondary};
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    fill: ${COLORS.red};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
