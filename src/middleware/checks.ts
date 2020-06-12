import { Request, Response, NextFunction } from 'express';
import { HTTP400Error, HTTP422Error } from '../utils/httpErrors';

export const checkUserParams = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.params.id
  if (!id) {
    throw new HTTP400Error();
  } else if (!(parseInt(id) === parseFloat(id))) {
    throw new HTTP422Error()
  } else {
    next();
  }
};
