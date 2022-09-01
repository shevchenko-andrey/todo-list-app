import React from 'react';
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import { RegExEmail } from '../../../common/consts/regular-expresions';
import { IUser, IUserRegister } from '../../../common/types/user.types';
import { InputComponent } from '../../../common/components/input';
import * as Styled from './register.styled';

const initialState = {
  username: '',
  email: '',
  password: '',
  verifyPassword: ''
};
const UserSchema = Yup.object().shape({
  username: Yup.string().min(2).max(20).required(),
  email: Yup.string().matches(RegExEmail, 'please input correct email').max(30).required(),
  password: Yup.string().min(8).max(16).required(),
  verifyPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords do not match')
    .required()
});

interface IRegisterFormProps {
  onSubmit: (values: IUser) => void;
  initialValues?: IUserRegister;
}

export const RegisterFormComponent = ({
  onSubmit,
  initialValues = initialState
}: IRegisterFormProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={UserSchema}
    onSubmit={(values, actions: FormikHelpers<IUser>) => {
      onSubmit(values);
      actions.resetForm();
    }}
  >
    <Styled.RegisterForm>
      <InputComponent name="username" title="Username" />

      <InputComponent name="email" title="Email" />

      <InputComponent name="password" title="Password" type="password" />

      <InputComponent name="verifyPassword" title="Verify password" type="password" />

      <Styled.Button type="submit">Register</Styled.Button>
    </Styled.RegisterForm>
  </Formik>
);
