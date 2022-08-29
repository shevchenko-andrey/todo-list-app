import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { ITodoResponce } from '../../types/todo.types';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import * as Styled from './todo-item.styled';
import todoService from '../../../common/services/todo.service';
import { COLORS } from '../../../theme';

// interface ITodoItemProps extends ITodoResponce {
//   as?: 'li' | 'div';
// }

export const TodoItemComponent = ({
  _id,
  title,
  year,
  isPublic,
  isCompleted,
  description
}: ITodoResponce) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<{}, {}, string>((id) => todoService.deleteTodo(id), {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.TODOS)
  });

  const handleDelete = () => {
    mutate(_id);
  };

  return (
    <Styled.Item key={_id}>
      <Styled.ArticleWrapper>
        <Styled.Title>
          <span>{title} </span>
          <span>{year}</span>
        </Styled.Title>

        <Styled.Descriprion>{description}</Styled.Descriprion>

        <p>
          <span>{isCompleted ? 'Completed' : 'Not completed'}</span>
          <span>{', '}</span>
          <span>{isPublic ? 'Public' : 'Private'}</span>
        </p>
      </Styled.ArticleWrapper>

      <Styled.ButtonWrapper>
        <Styled.Button onClick={handleDelete} type="button">
          <Styled.DeleteIcon title="delete todo" size={20} fill={COLORS.secondary} />
        </Styled.Button>
        <Link to={`${ROUTER_KEYS.TODO}/${_id}`}>
          <Styled.EditIcon title="edit" fill={COLORS.secondary} size={20} />
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Item>
  );
};
