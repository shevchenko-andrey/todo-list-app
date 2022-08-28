import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Button = styled.button`
  margin-right: ${SPACES.l};
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const DeleteIcon = styled(MdDelete)`
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    fill: ${COLORS.red};
  }
`;
export const EditIcon = styled(MdModeEditOutline)`
  transition: background-color, color, 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  :hover,
  :focus {
    fill: ${COLORS.orenge};
  }
`;
export const Descriprion = styled.p``;

export const ButtonWrapper = styled.div`
  margin-top: ${SPACES.l};
`;
export const Title = styled.h2`
  margin-bottom: ${SPACES.s};
`;
export const Year = styled.span`
  margin-left: ${SPACES.s};
`;
export const ArticleWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 17rem;
  }
`;
