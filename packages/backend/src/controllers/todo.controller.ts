import { Request } from 'express';
import { ITodoParams } from '../types/todo-params.type';
import { ITodo } from '../models/Todo';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  createTodo = (req: Request<{}, {}, ITodo>) =>
    this.todoService.addTodo(req.body, req.user as string);

  getAllTodo = (req: Request) => this.todoService.findAll(req.user as string);

  getTodoById = (req: Request<ITodoParams>) => {
    const { id = '' } = req.params;
    return this.todoService.findById(id, req.user as string);
  };

  updateTodo = (req: Request<ITodoParams, {}, ITodo>) => {
    const { id = '' } = req.params;
    return this.todoService.updateById(id, req.body, req.user as string);
  };

  deleteTodo = (req: Request<ITodoParams>) => {
    const { id = '' } = req.params;
    return this.todoService.removeById(id, req.user as string);
  };
}

const todoController = new TodoController(new TodoService());
export default todoController;
