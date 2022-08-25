import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';

const isExist =
  <T>(model: Model<T>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findId = await model.findById({ _id: req.params.id });
      if (findId === null) throw Error();
      return next();
    } catch {
      const error = { message: 'Nothing found in the database for this id' };
      return res.status(404).json(error);
    }
  };

export default isExist;
