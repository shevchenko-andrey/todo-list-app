import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodosPageContainer from '../todos';
import { APP_KEYS } from '../common/consts';
import EditTodoPageContainer from '../edit-todo';
import CreateTodoPageContainer from '../create-todo';
import RegisterPageContainer from '../register';
import LoginPageContainer from '../login';
import { PrivateRouteComponent } from './components/private-route/private-route.component';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={RegisterPageContainer} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      <Route component={LoginPageContainer} path={APP_KEYS.ROUTER_KEYS.LOGIN} />

      <PrivateRouteComponent component={TodosPageContainer} path={APP_KEYS.ROUTER_KEYS.TODOS} />
      <PrivateRouteComponent
        component={CreateTodoPageContainer}
        path={APP_KEYS.ROUTER_KEYS.CREATE_TODO}
      />
      <PrivateRouteComponent
        component={EditTodoPageContainer}
        path={`${APP_KEYS.ROUTER_KEYS.TODO}/:id`}
      />
    </Switch>
  </Router>
);
