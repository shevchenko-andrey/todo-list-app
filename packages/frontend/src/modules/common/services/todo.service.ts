import axios from 'axios';
import { ITodo, ITodoResponce } from '../../todos/types/todo.types';
import HttpService from './http.service';
import { BACKEND_KEYS } from '../consts/app-keys.const';
import { IFilter } from '../../todos/types/filter.types';

const httpService = new HttpService<ITodoResponce>(
  axios,
  BACKEND_KEYS.BASE_URL,
  BACKEND_KEYS.API_VERSION,
  BACKEND_KEYS.TODOS
);

class TodoService<D> {
  constructor(private http: HttpService<D>) {}

  private createQueryParams({ query, isComplited, isPublic }: IFilter) {
    return `filter/?q=${query}&public=${isPublic}&complited=${isComplited}`;
  }

  async getTodos(params: IFilter, withFilter = false) {
    const queryParams = withFilter ? this.createQueryParams(params) : '';
    return this.http.get(queryParams);
  }

  async getTodoByID(id: string) {
    return this.http.getById(id);
  }

  async createTodo(body: ITodo) {
    return this.http.post<ITodo, ITodo>(body);
  }

  async updateTodo(id: string, body: ITodo) {
    return this.http.put(id, body);
  }

  async deleteTodo(id: string) {
    return this.http.delete(id);
  }
}
export default new TodoService(httpService);
