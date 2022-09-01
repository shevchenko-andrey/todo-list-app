import { Router } from 'express';
import passport from 'passport';
import { jwtStrategy } from '../../config/passport';
import todoController from '../../controllers/todo.controller';
import Todo, { joiShema } from '../../models/Todo';
import handlerControl from '../../middlewares/handler-control.middleware';
import validate from '../../middlewares/validate.middleware';
import isExist from '../../middlewares/is-exist.middleware';
import { auth } from '../../middlewares/auth.middleware';

const todosRouter: Router = Router();

passport.use('jwt', jwtStrategy);

todosRouter.post(
  '',
  auth,
  validate(joiShema),
  handlerControl(todoController.createTodo.bind(todoController))
);

todosRouter.get('', auth, handlerControl(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/filter',
  auth,
  handlerControl(todoController.getFilteredTodo.bind(todoController))
);

todosRouter.get(
  '/:id',
  auth,
  isExist(Todo),
  handlerControl(todoController.getTodoById.bind(todoController))
);

todosRouter.put(
  '/:id',
  auth,
  isExist(Todo),
  validate(joiShema),
  handlerControl(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  auth,
  isExist(Todo),
  handlerControl(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
