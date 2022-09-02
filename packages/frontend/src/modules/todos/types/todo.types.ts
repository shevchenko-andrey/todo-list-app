export interface ITodo {
  title: string;
  year: string;
  isPublic: boolean;
  isCompleted: boolean;
  description: string;
}

export interface ITodoResponce extends ITodo {
  _id: string;
}

export interface ITodoPagination {
  data: ITodoResponce[];
  totalPage: number;
}
