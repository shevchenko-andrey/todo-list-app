import { NotFound } from 'http-errors';
import Todo, { ITodo } from '../models/Todo';

export default class TodoService {
  async findAll(userId: string) {
    return Todo.find({ $or: [{ userId }, { isPublic: true }] });
  }

  async findById(todoId: string, owner: string) {
    return Todo.findOne({
      $or: [
        {
          $and: [{ userId: owner }, { _id: todoId }]
        },
        { $and: [{ isPublic: true }, { _id: todoId }] }
      ]
    });
  }

  async addTodo(body: ITodo, userId: string) {
    return Todo.create({ ...body, userId });
  }

  async updateById(_id: string, body: ITodo, owner: string) {
    const todoById = await this.findById(_id, owner);
    if (!todoById) {
      throw new NotFound('todo is not found');
    }
    return Todo.findByIdAndUpdate(_id, body, {
      new: true
    });
  }

  async removeById(id: string, owner: string) {
    const todoById = await this.findById(id, owner);
    if (!todoById) {
      throw new NotFound('todo is not found');
    }
    return Todo.findByIdAndRemove(id);
  }
}
