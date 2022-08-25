import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import Todo, { joiShema } from '../../models/Todo';
import handlerControl from '../../middlewares/handler-control';
import validate from '../../middlewares/validate';
import isExist from '../../middlewares/is-exist';

const todosRouter: Router = Router();

todosRouter.post(
  '',
  validate(joiShema),
  handlerControl(todoController.createTodo.bind(todoController))
);

todosRouter.get('', handlerControl(todoController.getAllTodo.bind(todoController)));

todosRouter.get(
  '/:id',
  isExist(Todo),
  handlerControl(todoController.getTodoById.bind(todoController))
);

todosRouter.put(
  '/:id',
  isExist(Todo),
  validate(joiShema),
  handlerControl(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExist(Todo),
  handlerControl(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
