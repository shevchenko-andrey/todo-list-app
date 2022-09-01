import React from 'react';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { ContainerComponent } from '../common/components/container';
import { APP_KEYS } from '../common/consts';
import { QUERY_KEYS } from '../common/consts/app-keys.const';
import authService from '../common/services/auth.service';
import localStorageService from '../common/services/local-storage.service';
import { IToken } from '../common/types/auth.types';
import { IUser } from '../common/types/user.types';
import { LoginFormComponent } from './components/login-form';

const LoginPageContainer = () => {
  const { isSuccess, mutate } = useMutation<IToken, {}, IUser>(QUERY_KEYS.LOGIN, (values) =>
    authService.login(values)
  );
  const onSubmit = (values: IUser) => {
    const { email, password } = values;
    mutate(
      { email, password },
      {
        onSuccess: ({ token }) => {
          localStorageService.setToken(token);
        }
      }
    );
  };
  return (
    <main>
      <ContainerComponent>
        <LoginFormComponent onSubmit={onSubmit} />
        {isSuccess && <Redirect to={APP_KEYS.ROUTER_KEYS.TODOS} />}
      </ContainerComponent>
    </main>
  );
};
export default LoginPageContainer;
