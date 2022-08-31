export interface IUser {
  _id?: string;
  email: string;
  password: string;
  username?: string;
}
export interface IUserRegister extends IUser {
  username: string;
  verifyPassword: string;
}
