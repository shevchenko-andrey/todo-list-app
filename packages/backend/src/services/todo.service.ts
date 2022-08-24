import Todo, { ITodo } from '../models/Todo';

export default class TodoService {
  async findAll() {
    return Todo.find({});
  }

  async findById(id: string) {
    return Todo.findById(id);
  }

  async addTodo(body: ITodo) {
    return Todo.create(body);
  }

  async updateById(id: string, body: ITodo) {
    return Todo.findByIdAndUpdate(id, body, {
      new: true
    });
  }

  async removeById(id: string) {
    return Todo.findByIdAndRemove(id);
  }
}
