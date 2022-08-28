import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Redirect } from 'react-router-dom';
import { ContainerComponent } from '../common/components/container';
import { NavLinkComponent } from '../common/components/nav-link';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
import todoService from '../common/services/todo.service';
import { TodoFormComponent } from '../todos/components/todo-form/todo-form.component';
import { ITodo } from '../todos/types/todo.types';

import { GoBackComponent } from '../common/components/go-back';
// import { ITodo } from './types/todo.types';

const CreateTodoPageContainer = () => {
  const queryClient = useQueryClient();
  const { isSuccess, mutate } = useMutation(todoService.createTodo);

  const onSubmit = (values: ITodo) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.TODOS, { refetchInactive: true });
      }
    });
  };
  return (
    <main>
      <ContainerComponent>
        <NavLinkComponent to={ROUTER_KEYS.TODOS}>
          <GoBackComponent />
        </NavLinkComponent>
        <TodoFormComponent onSubmit={onSubmit} />
        {isSuccess && <Redirect to={ROUTER_KEYS.TODOS} />}
      </ContainerComponent>
    </main>
  );
};

export default CreateTodoPageContainer;
