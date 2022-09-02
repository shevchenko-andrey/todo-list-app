import { NotFound } from 'http-errors';
import { ITodoQuery } from '../types/todo-params.type';
import Todo, { ITodo } from '../models/Todo';
import FilterServise from './filter.service';
import { numberConverter } from '../utils/helpers/number-converter';

const filterServise = new FilterServise();

export default class TodoService {
  async findAll(userId = '') {
    return Todo.find({
      $or: [{ userId }, { isPublic: true }]
    });
  }

  async findWithFilter(query: ITodoQuery, userId = '') {
    const queryParams = filterServise.getFilterParams(query);

    const { page = '1', limit = '10' } = query;
    const [pageNumber, limitNumber] = numberConverter(page, limit);
    const skip = (pageNumber - 1) * limitNumber;
    return Todo.find({ $and: [queryParams, { $or: [{ userId }, { isPublic: true }] }] }, '', {
      skip,
      limit: limitNumber
    });
  }

  async findById(todoId: string, userId = '') {
    const todoById = await Todo.findOne({
      $or: [
        {
          $and: [{ userId }, { _id: todoId }]
        },
        { $and: [{ isPublic: true }, { _id: todoId }] }
      ]
    });
    if (!todoById) {
      throw new NotFound('todo is not found');
    }
    return todoById;
  }

  async addTodo(body: ITodo, userId = '') {
    return Todo.create({ ...body, userId });
  }

  async updateById(_id: string, body: ITodo, userId = '') {
    await this.findById(_id, userId);

    return Todo.findByIdAndUpdate(_id, body, {
      new: true
    });
  }

  async removeById(id: string, userId = '') {
    const todoById = await this.findById(id, userId);
    if (!todoById) {
      throw new NotFound('todo is not found');
    }
    return Todo.findByIdAndRemove(id);
  }
}
