import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { RegExEmail } from '../../../common/consts/regular-expresions';
import { IUser } from '../../../common/types/user.types';
import { InputComponent } from '../../../common/components/input';
import * as Styled from './login-form.styled';

const initialState = {
  email: '',
  password: ''
};

const UserSchema = Yup.object().shape({
  email: Yup.string().matches(RegExEmail, 'please input correct email').max(30),
  password: Yup.string().min(8).max(16)
});

interface IRegisterFormProps {
  onSubmit: (values: IUser) => void;
  initialValues?: IUser;
}

export const LoginFormComponent = ({
  onSubmit,
  initialValues = initialState
}: IRegisterFormProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={UserSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    <Styled.LoginForm>
      <InputComponent name="email" title="Email" />

      <InputComponent name="password" title="Password" />

      <Styled.Button type="submit">Login</Styled.Button>
    </Styled.LoginForm>
  </Formik>
);
