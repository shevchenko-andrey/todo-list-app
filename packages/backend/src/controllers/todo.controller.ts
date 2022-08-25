import { Request } from 'express';
import { ITodoParams } from '../types/todo-params.type';
import { ITodo } from '../models/Todo';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  createTodo(req: Request<{}, {}, ITodo>) {
    return this.todoService.addTodo(req.body);
  }

  getAllTodo() {
    return this.todoService.findAll();
  }

  getTodoById(req: Request<ITodoParams>) {
    const { id = '' } = req.params;
    return this.todoService.findById(id);
  }

  updateTodo(req: Request<ITodoParams, {}, ITodo>) {
    const { id = '' } = req.params;
    return this.todoService.updateById(id, req.body);
  }

  deleteTodo(req: Request<ITodoParams>) {
    const { id = '' } = req.params;
    return this.todoService.removeById(id);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
