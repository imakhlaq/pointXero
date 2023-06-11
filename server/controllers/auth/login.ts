import { Request, Response } from 'express';

const logIn = (req: Request, res: Response) => {
  res.json({ hello: 'popo' });
};

export default logIn;
