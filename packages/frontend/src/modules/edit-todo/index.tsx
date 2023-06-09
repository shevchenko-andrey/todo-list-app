import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Redirect, useParams } from 'react-router-dom';
import { ContainerComponent } from '../common/components/container';
import { GoBackComponent } from '../common/components/go-back';
import { NavLinkComponent } from '../common/components/nav-link';
import { APP_KEYS } from '../common/consts';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
import localStorageService from '../common/services/local-storage.service';
import todoService from '../common/services/todo.service';
import { TodoFormComponent } from '../todos/components/todo-form/todo-form.component';
import { ITodo } from '../todos/types/todo.types';

const EditTodoPageContainer = () => {
  const queryClient = useQueryClient();
  const { id } = useParams<{ id: string }>();
  const {
    data: initialValues,
    isSuccess: isFindInitialValue,
    isError: isNotFoundInitialValues
  } = useQuery([QUERY_KEYS.TODO, id], () => todoService.getTodoByID(id), {
    select({ description, isCompleted, isPublic, title, year }) {
      return { description, isCompleted, isPublic, title, year };
    },
    onError: () => localStorageService.setToken('')
  });

  const {
    isSuccess: isUpdateTodo,
    isError,
    mutate
  } = useMutation<ITodo, {}, ITodo>((values) => todoService.updateTodo(id, values), {
    onError: () => localStorageService.setToken('')
  });

  const onSubmit = (values: ITodo) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.removeQueries(QUERY_KEYS.TODO);
        queryClient.invalidateQueries(QUERY_KEYS.TODOS, {
          refetchInactive: true
        });
      }
    });
  };

  return (
    <main>
      <ContainerComponent>
        <NavLinkComponent to={ROUTER_KEYS.TODOS}>
          <GoBackComponent />
        </NavLinkComponent>
        {isFindInitialValue && (
          <TodoFormComponent onSubmit={onSubmit} initialValues={initialValues} />
        )}
        {(isUpdateTodo || isNotFoundInitialValues) && <Redirect to={ROUTER_KEYS.TODOS} />}
        {isError && <Redirect to={APP_KEYS.ROUTER_KEYS.LOGIN} />}
      </ContainerComponent>
    </main>
  );
};

export default EditTodoPageContainer;
