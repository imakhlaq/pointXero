import { NextFunction, Request, Response } from 'express';

const userAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['Authentication'];
};

export default userAuth;