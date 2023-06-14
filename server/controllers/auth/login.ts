import { Request, Response } from 'express';
import { User } from '../../db/schema/users';
import db from '../../db/database';
import { user } from '../../db/schema/users';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';
import createJwtTokens from '../../utils/createJwtTokens';
import CustomError from '../../utils/CustomError';
import userLoginInfo, { UserLoginInfo } from '../../validations/loginUserDTO';
import { z } from 'zod';

import formatError from '../../utils/formatError';

const logIn = async (req: Request, res: Response) => {
  try {
    //user data validation
    const userData: UserLoginInfo = userLoginInfo.parse(req.body);

    //searching user in db
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

    //jwt token generation
    const token = createJwtTokens(
      userInDB.id,
      userInDB.userName,
      userInDB.email,
    );

    return res.status(200).json({ token });
  } catch (_err) {
    // zod Error
    if (_err instanceof z.ZodError) {
      return res.status(400).json(formatError(_err));
    }
    //custom error
    const err = _err as CustomError;
    return res.status(err.statusCode ?? 500).json(formatError(err));
  }
};

export default logIn;
