import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, SPACES } from '../../../theme';

export const NavigationLink = styled(Link)`
  text-align: center;
  cursor: pointer;
  min-width: 5rem;
  padding: ${SPACES.s};
  display: block;
  color: ${COLORS.black};

  text-decoration: none;
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);

  :hover,
  :focus > div {
    fill: ${COLORS.green};
  }
`;
export const Wrapper = styled.div`
  /* :hover,
  :focus > {
    background-color: ${COLORS.green};
    fill: ${COLORS.green};
  } */
`;
