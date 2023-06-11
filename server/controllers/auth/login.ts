import { Request, Response } from 'express';
import db from '../../db/database';
import { users } from '../../db/schema/users';

const logIn = (req: Request, res: Response) => {
  db.select();
  res.json({ hello: 'popo' });
};

export default logIn;
