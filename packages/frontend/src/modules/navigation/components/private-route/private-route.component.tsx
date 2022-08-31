import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { APP_KEYS } from '../../../common/consts';
import localStorageService from '../../../common/services/local-storage.service';

interface IPrivateRoute {
  component: React.FC;
  path: string;
}
export const PrivateRouteComponent = ({ component, path }: IPrivateRoute) => {
  if (!localStorageService.getToken()) {
    return <Redirect to={APP_KEYS.ROUTER_KEYS.LOGIN} />;
  }
  return <Route component={component} path={path} />;
};
