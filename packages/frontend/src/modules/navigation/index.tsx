import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodosPageContainer from '../todos';
import { APP_KEYS } from '../common/consts';
import EditTodoPageContainer from '../edit-todo';
import CreateTodoPageContainer from '../create-todo';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={TodosPageContainer} path={APP_KEYS.ROUTER_KEYS.TODOS} />
      <Route component={CreateTodoPageContainer} path={APP_KEYS.ROUTER_KEYS.CREATE_TODO} />
      <Route component={EditTodoPageContainer} path={`${APP_KEYS.ROUTER_KEYS.TODO}/:id`} />
    </Switch>
  </Router>
);
