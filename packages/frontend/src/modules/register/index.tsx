import React from 'react';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { ContainerComponent } from '../common/components/container';
import { APP_KEYS } from '../common/consts';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import authService from '../common/services/auth.service';
import { IUser } from '../common/types/user.types';
import { RegisterFormComponent } from './components/register-form';

const RegisterPageContainer = () => {
  const { isSuccess, mutate } = useMutation<IUser, {}, IUser>(QUERY_KEYS.REGISTER, (values) =>
    authService.register(values)
  );
  const onSubmit = (values: IUser) => {
    const { email, password, username } = values;
    mutate({ email, password, username });
  };
  return (
    <main>
      <ContainerComponent>
        <RegisterFormComponent onSubmit={onSubmit} />
        {isSuccess && <Redirect to={APP_KEYS.ROUTER_KEYS.LOGIN} />}
      </ContainerComponent>
    </main>
  );
};
export default RegisterPageContainer;
