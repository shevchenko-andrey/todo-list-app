import axios from 'axios';
import { BACKEND_KEYS } from '../consts/app-keys.const';
import { IToken } from '../types/auth.types';
import { IUser } from '../types/user.types';
import HttpService from './http.service';

const httpService = new HttpService<IUser>(
  axios,
  BACKEND_KEYS.BASE_URL,
  BACKEND_KEYS.API_VERSION,
  BACKEND_KEYS.USER
);

class AuthService {
  constructor(private http: HttpService<IUser>) {}

  async register(data: IUser) {
    return this.http.post<IUser, IUser>(data, 'register');
  }

  async login(user: IUser) {
    return this.http.post<IUser, IToken>(user, 'login');
  }
}
export default new AuthService(httpService);
