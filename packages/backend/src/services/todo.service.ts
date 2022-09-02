import { NotFound } from 'http-errors';
import { FilterQuery } from 'mongoose';
import { ITodoQuery } from '../types/todo-params.type';
import Todo, { ITodo } from '../models/Todo';
import FilterServise from './filter.service';
import { numberConverter } from '../utils/helpers/number-converter';
import { booleansParser } from '../utils/helpers/boolean-parser';

const filterServise = new FilterServise();

export default class TodoService {
  async getPaginationInfo(
    query: ITodoQuery,
    userId = '',
    filter: FilterQuery<ITodo> = { title: { $regex: '' } },
    watchPublic = true
  ) {
    const { page = '1', limit = '10' } = query;

    const [pageNumber, limitNumber] = numberConverter(page, limit);

    const skip = (pageNumber - 1) * limitNumber;

    const total = await Todo.find({
      $and: [filter, { $or: [{ userId }, { watchPublic }] }]
    }).countDocuments();

    return {
      skip,
      limit: limitNumber,
      totalPage: Math.ceil(total / limitNumber)
    };
  }

  async findAll(query: ITodoQuery, userId = '') {
    const { skip, limit, totalPage } = await this.getPaginationInfo(query, userId);

    const data = await Todo.find({ $and: [{ $or: [{ userId }, { isPublic: true }] }] }, '', {
      skip,
      limit
    });
    return { data, totalPage };
  }

  async findWithFilter(query: ITodoQuery, userId = '') {
    const [isPublic] = booleansParser(query.public);
    const filterParams = filterServise.getFilterParams(query);
    const { skip, limit, totalPage } = await this.getPaginationInfo(
      query,
      userId,
      filterParams,
      isPublic
    );

    const data = await Todo.find(
      { $and: [filterParams, { $or: [{ userId }, { isPublic: isPublic ?? true }] }] },
      '',
      {
        skip,
        limit
      }
    );
    return { data, totalPage };
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
