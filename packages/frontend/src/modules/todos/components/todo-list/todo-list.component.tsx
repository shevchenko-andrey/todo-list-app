import React from 'react';
import { TodoItemComponent } from '../todo-item';
import { ITodoResponce } from '../../types/todo.types';
import * as Styled from './todo-list.styled';

interface ITodoListProps {
  todos: ITodoResponce[] | null;
}
export const TodoListComponent = ({ todos }: ITodoListProps) => (
  <Styled.List>
    {todos &&
      todos.map(({ _id, title, year, isPublic, isCompleted, description }) => (
        <TodoItemComponent
          _id={_id}
          key={_id}
          description={description}
          isPublic={isPublic}
          year={year}
          isCompleted={isCompleted}
          title={title}
        />
      ))}
  </Styled.List>
);
