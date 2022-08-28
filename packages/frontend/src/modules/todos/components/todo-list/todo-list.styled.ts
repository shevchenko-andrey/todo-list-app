import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 17rem;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 40rem;
  }
`;
