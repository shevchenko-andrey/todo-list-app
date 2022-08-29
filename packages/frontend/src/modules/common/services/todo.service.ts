import axios from 'axios';
import { ITodo, ITodoResponce } from '../../todos/types/todo.types';
import HttpService from './http.service';
import { BACKEND_KEYS } from '../consts/app-keys.const';

const httpService = new HttpService<ITodoResponce>(
  axios,
  BACKEND_KEYS.BASE_URL,
  BACKEND_KEYS.API_VERSION,
  BACKEND_KEYS.TODOS
);

class TodoService<D> {
  constructor(private http: HttpService<D>) {}

  getTodos = async () => this.http.get();

  getTodoByID = async (id: string) => this.http.getByID(id);

  createTodo = async (body: ITodo) => this.http.post(body);

  updateTodo = async (id: string, body: ITodo) => this.http.put(id, body);

  deleteTodo = async (id: string) => this.http.delete(id);
}
export default new TodoService(httpService);
