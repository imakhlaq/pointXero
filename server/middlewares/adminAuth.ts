import { NextFunction, Request, Response } from 'express';

const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['Authentication'];
};

export default adminAuth;
