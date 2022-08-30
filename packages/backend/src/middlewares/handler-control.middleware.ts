import { Request, Response, NextFunction } from 'express';
import { InternalServerError } from 'http-errors';
import { IError } from '../types/error';

const handlerControl =
  <T>(ctrl: (req: Request, res: Response, next: NextFunction) => Promise<T | T[] | null>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await ctrl(req, res, next);

      if (!data) {
        throw new InternalServerError();
      }
      res.status(200).json(data);
    } catch (e) {
      const error = e as IError;
      return res.status(error.status ?? 500).json(error.message ?? error);
    }
  };

export default handlerControl;
