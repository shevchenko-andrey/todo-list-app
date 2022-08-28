import React from 'react';
import { useQuery } from 'react-query';
import { ContainerComponent } from '../common/components/container';
import { NavLinkComponent } from '../common/components/nav-link';
import { QUERY_KEYS, ROUTER_KEYS } from '../common/consts/app-keys.const';
import todoService from '../common/services/todo.service';
import { TodoListComponent } from './components/todo-list';
import { ITodoResponce } from './types/todo.types';
import * as Icons from '../common/components/react-icons/plus-circle.styled';

const TodosPageContainer = () => {
  const { data: todos, isSuccess } = useQuery<{}, {}, ITodoResponce[]>(
    QUERY_KEYS.TODOS,
    todoService.getTodos
  );

  return (
    <main>
      <ContainerComponent>
        <NavLinkComponent to={ROUTER_KEYS.CREATE_TODO}>
          <Icons.PlusCircle size={30} title="Create todo" />
        </NavLinkComponent>

        <TodoListComponent todos={isSuccess ? todos : null} />
      </ContainerComponent>
    </main>
  );
};

export default TodosPageContainer;
