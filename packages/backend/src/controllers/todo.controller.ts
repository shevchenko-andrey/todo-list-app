import { Request } from 'express';
import { ITodoParams } from '../types/todo-params.type';
import { ITodo } from '../models/Todo';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async createTodo(req: Request<{}, ITodo, ITodo>) {
    return this.todoService.addTodo(req.body, req.userId);
  }

  async getAllTodo(req: Request<{}, ITodo[]>) {
    return this.todoService.findAll(req.userId);
  }

  async getTodoById(req: Request<ITodoParams, ITodo>) {
    const { id = '' } = req.params;
    return this.todoService.findById(id, req.userId);
  }

  async updateTodo(req: Request<ITodoParams, ITodo>) {
    const { id = '' } = req.params;
    return this.todoService.updateById(id, req.body, req.userId);
  }

  async deleteTodo(req: Request<ITodoParams, ITodo>) {
    const { id = '' } = req.params;
    return this.todoService.removeById(id, req.userId);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
