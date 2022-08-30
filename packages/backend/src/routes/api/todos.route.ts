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

todosRouter.post('', auth, validate(joiShema), handlerControl(todoController.createTodo));

todosRouter.get('', auth, handlerControl(todoController.getAllTodo));

todosRouter.get('/:id', auth, isExist(Todo), handlerControl(todoController.getTodoById));

todosRouter.put(
  '/:id',
  auth,
  isExist(Todo),
  validate(joiShema),
  handlerControl(todoController.updateTodo)
);

todosRouter.delete('/:id', auth, isExist(Todo), handlerControl(todoController.deleteTodo));

export default todosRouter;
