import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Redirect } from 'react-router-dom';
import { ContainerComponent } from '../common/components/container';
import { LIMIT, QUERY_KEYS } from '../common/consts/app-keys.const';
import todoService from '../common/services/todo.service';
import { TodoListComponent } from './components/todo-list';
import { ITodoPagination } from './types/todo.types';
import localStorageService from '../common/services/local-storage.service';
import { APP_KEYS } from '../common/consts';
import { TodoFilterComponent } from './components/todo-filter';
import { IFilter } from './types/filter.types';
import { TodoMenuComponent } from './components/todo-menu';
import { PaginationComponent } from './components/pagination';

const TodosPageContainer = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isFilterOut, setIsFilterOut] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [isComplited, setIsComplited] = useState(false);
  const [query, setQuery] = useState('');
  const {
    data: todos,
    isSuccess,
    isError,
    refetch
  } = useQuery<{}, {}, ITodoPagination>(
    QUERY_KEYS.TODOS,
    () =>
      todoService.getTodos<ITodoPagination>(
        { isPublic, isComplited, page, query, limit: LIMIT },
        isFilterOut
      ),
    {
      onSuccess(res) {
        setTotalPage(res.totalPage);
      },

      onError: () => localStorageService.setToken('')
    }
  );

  const onSubmit = (values: IFilter) => {
    setIsPublic(values.isPublic);
    setIsComplited(values.isComplited);
    setQuery(values.query);
    refetch();
  };

  const onHandleFilter = () => setIsFilterOut((prev) => !prev);

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
    refetch();
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    refetch();
  };

  return (
    <main>
      <ContainerComponent>
        <TodoMenuComponent isFilterOut={isFilterOut} onHandleFilter={onHandleFilter} />

        {isFilterOut && <TodoFilterComponent onSubmit={onSubmit} />}

        <TodoListComponent todos={isSuccess ? todos.data : null} />

        {totalPage !== 1 && (
          <PaginationComponent
            page={page}
            totalPages={totalPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        )}

        {isError && <Redirect to={APP_KEYS.ROUTER_KEYS.LOGIN} />}
      </ContainerComponent>
    </main>
  );
};

export default TodosPageContainer;
