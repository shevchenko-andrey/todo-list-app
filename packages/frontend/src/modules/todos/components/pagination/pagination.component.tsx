import React from 'react';
import * as Styled from './pagination.styled';

interface IPaginationProps {
  page: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export const PaginationComponent = ({
  handleNextPage,
  handlePrevPage,
  page,
  totalPages
}: IPaginationProps) => (
  <Styled.PaginationBar>
    {page !== 1 && <Styled.ArrowLeft size={25} onClick={handlePrevPage} />}
    <Styled.NumberOfPages>Page {page}</Styled.NumberOfPages>
    {page <= totalPages && <Styled.ArrowRight size={25} onClick={handleNextPage} />}
  </Styled.PaginationBar>
);
