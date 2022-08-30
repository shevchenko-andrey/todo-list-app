import { Request } from 'express';

interface RequestParams {
  id?: string;
}

interface ResponseBody {}

interface RequestBody {
  title: string;
  description: string;
  year: number;
  isPublic: boolean;
  isCompleted: boolean;
  userId: string;
}

interface RequestQuery {
  //   search: string;
  //   compleated: string;
  //   privated: string;
  //   skip: string;
  //   limit: string;
}

export interface IRequest<P = RequestParams, R = ResponseBody, B = RequestBody, Q = RequestQuery>
  extends Request<P, R, B, Q> {
  userId?: string;
}
