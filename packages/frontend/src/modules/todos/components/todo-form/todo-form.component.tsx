import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import * as Styled from './todo-form.styled';
import { ITodo } from '../../types/todo.types';
import { InputComponent } from '../../../common/components/input';
import { CheckboxComponent } from '../../../common/components/checkbox';

const initialState: ITodo = {
  title: '',
  description: '',
  year: '',
  isPublic: false,
  isCompleted: false
};

const TodoSchema = Yup.object().shape({
  title: Yup.string().min(10).max(30).required(),
  description: Yup.string().min(10).max(100).required(),
  year: Yup.string()
    .length(4, 'year must be four digits')
    .matches(/2[0-9][0-9][0-9]/, 'min year 2000 max 2999')
    .required(),
  isPublic: Yup.boolean(),
  isCompleted: Yup.boolean()
});

interface ITodoFormProps {
  initialValues?: ITodo;
  onSubmit: (values: ITodo) => void;
}
export const TodoFormComponent = ({ initialValues = initialState, onSubmit }: ITodoFormProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={TodoSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    <Styled.TodoForm>
      <InputComponent name="title" title="Title" />

      <InputComponent name="description" title="Description" />

      <InputComponent name="year" title="Year" />

      <CheckboxComponent name="isPublic" title="Public" />

      <CheckboxComponent name="isCompleted" title="Completed" />

      <Styled.Button type="submit">Submit</Styled.Button>
    </Styled.TodoForm>
  </Formik>
);
