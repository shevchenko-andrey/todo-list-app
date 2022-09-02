import styled from 'styled-components';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { SPACES } from '../../../theme';

export const PaginationBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: ${SPACES.m};
  padding-bottom: ${SPACES.m};
`;
export const ArrowRight = styled(BsArrowRight)`
  cursor: pointer;
`;

export const ArrowLeft = styled(BsArrowLeft)`
  cursor: pointer;
`;

export const NumberOfPages = styled.span`
  display: block;
  margin: 0 ${SPACES.m};
`;
