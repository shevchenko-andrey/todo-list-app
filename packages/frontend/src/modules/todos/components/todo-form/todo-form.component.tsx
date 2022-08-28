import React from 'react';
import { Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import * as Styled from './todo-form.styled';
import { ITodo } from '../../types/todo.types';

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
      <Styled.FildWrapper>
        <Styled.Label htmlFor="title">Title</Styled.Label>
        <Styled.TodoField id="title" name="title" />
        <ErrorMessage component={Styled.Error} name="title" />
      </Styled.FildWrapper>

      <Styled.FildWrapper>
        <Styled.Label htmlFor="description">Description</Styled.Label>
        <Field as={Styled.TextArea} id="description" name="description" type="textarea" />
        <ErrorMessage component={Styled.Error} name="description" />
      </Styled.FildWrapper>

      <Styled.FildWrapper>
        <Styled.Label htmlFor="year">Year</Styled.Label>
        <Styled.TodoField name="year" id="year" type="text" />
        <ErrorMessage component={Styled.Error} name="year" />
      </Styled.FildWrapper>

      <Styled.CheckboxWrapper>
        <Styled.Label htmlFor="isPublic">Public</Styled.Label>
        <Styled.Checkbox name="isPublic" id="isPublic" type="checkbox" />
      </Styled.CheckboxWrapper>

      <Styled.CheckboxWrapper>
        <Styled.Label htmlFor="isCompleted">Completed</Styled.Label>
        <Styled.Checkbox name="isCompleted" id="isCompleted" type="checkbox" />
      </Styled.CheckboxWrapper>
      <Styled.Button type="submit">Submit</Styled.Button>
    </Styled.TodoForm>
  </Formik>
);
