import { Request, Response, NextFunction } from 'express';
import { ITodoParams } from '../types/todo-params.type';

const handlerControl =
  <T>(
    ctrl: (req: Request<ITodoParams>, res: Response, next: NextFunction) => Promise<T | T[] | null>
  ) =>
  async (req: Request<ITodoParams>, res: Response, next: NextFunction) => {
    try {
      const data = await ctrl(req, res, next);
      if (!data) {
        throw new Error();
      }
      res.status(200).json({ data });
    } catch (e) {
      const error = { message: 'Internal Server Error' };
      return res.status(500).json(error);
    }
  };
export default handlerControl;
