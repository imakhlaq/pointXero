import { Request, Response } from 'express';
import { User } from '../../db/schema/users';
import db from '../../db/database';
import { user } from '../../db/schema/users';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';
import createJwtTokens from '../../utils/createJwtTokens';
import CustomError from '../../utils/CustomError';
import { Type } from 'typescript';

type UserData = {
  userName: string;
  password: string;
};

const logIn = async (req: Request, res: Response) => {
  const userData: UserData = req.body;

  try {
    const [userInDB]: User[] = await db
      .select()
      .from(user)
      .where(eq(user.userName, userData.userName));

    if (!userInDB) {
      throw new CustomError('Invalid username', 404);
    }

    const passMatch = await bcrypt.compare(
      userData.password,
      userInDB.password,
    );

    if (!passMatch) {
      throw new CustomError('Invalid password', 404);
    }

    const token = createJwtTokens(
      userInDB.id,
      userInDB.userName,
      userInDB.email,
    );

    return res.status(200).json({ token });
  } catch (_err) {
    const err = _err as CustomError;
    return res.status(err.statusCode).json({ message: err.message });
  }
};

export default logIn;
