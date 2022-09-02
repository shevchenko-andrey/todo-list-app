import React from 'react';
import { Form, Formik } from 'formik';
import { CheckboxComponent } from '../../../common/components/checkbox';
// import { ContainerComponent } from '../../../common/components/container';
import { InputComponent } from '../../../common/components/input';
import { IFilter } from '../../types/filter.types';
import * as Styled from './todo-filter.styled';

const initialState: IFilter = {
  query: '',
  isPublic: false,
  isComplited: false
};

interface ITodoFilterProps {
  onSubmit: (values: IFilter) => void;
  initialValues?: IFilter;
}

export const TodoFilterComponent = ({
  onSubmit,
  initialValues = initialState
}: ITodoFilterProps) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    <Form>
      <Styled.FilterWrapper>
        <InputComponent name="query" title="Filter" />
        <CheckboxComponent name="isPublic" title="Public" />
        <CheckboxComponent name="isComplited" title="Complited" />
        <Styled.Button type="submit">Filter</Styled.Button>
      </Styled.FilterWrapper>
    </Form>
  </Formik>
);
