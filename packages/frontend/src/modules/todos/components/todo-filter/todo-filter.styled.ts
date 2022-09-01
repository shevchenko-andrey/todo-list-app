import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const FilterWrapper = styled.div``;

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
