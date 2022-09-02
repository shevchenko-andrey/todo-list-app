import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Redirect } from 'react-router-dom';
import { ContainerComponent } from '../common/components/container';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import todoService from '../common/services/todo.service';
import { TodoListComponent } from './components/todo-list';
import { ITodoResponce } from './types/todo.types';
import localStorageService from '../common/services/local-storage.service';
import { APP_KEYS } from '../common/consts';
import { TodoFilterComponent } from './components/todo-filter';
import { IFilter } from './types/filter.types';
import { TodoMenuComponent } from './components/todo-menu';
import { PaginationComponent } from './components/pagination';

const TodosPageContainer = () => {
  const [page, setPage] = useState(1);
  const [isFilterOut, setIsFilterOut] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [isComplited, setIsComplited] = useState(false);
  const [query, setQuery] = useState('');
  const {
    data: todos,
    isSuccess,
    isError,
    refetch
  } = useQuery<{}, {}, ITodoResponce[]>(
    QUERY_KEYS.TODOS,
    () => todoService.getTodos({ isPublic, isComplited, query, limit: 10 }, isFilterOut),
    {
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
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <main>
      <ContainerComponent>
        <TodoMenuComponent isFilterOut={isFilterOut} onHandleFilter={onHandleFilter} />

        {isFilterOut && <TodoFilterComponent onSubmit={onSubmit} />}

        <TodoListComponent todos={isSuccess ? todos : null} />

        <PaginationComponent
          page={page}
          totalPages={9}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />

        {isError && <Redirect to={APP_KEYS.ROUTER_KEYS.LOGIN} />}
      </ContainerComponent>
    </main>
  );
};

export default TodosPageContainer;
