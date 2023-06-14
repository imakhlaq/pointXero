import { Request, Response } from 'express';
import db from '../../db/database';
import { NewUser, User, user } from '../../db/schema/users';
import * as bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';
import createJwtTokens from '../../utils/createJwtTokens';
import CustomError from '../../utils/CustomError';
import { z } from 'zod';

const signUp = async (req: Request, res: Response) => {
  const body: NewUser = req.body;

  //hash the password

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const userData = { ...body, password: hashedPassword };

  try {
    //check for username and email exits

    const emailExists = await db
      .select()
      .from(user)
      .where(eq(user.email, userData.email));

    if (emailExists.length) {
      throw new CustomError('This Email already Exits', 409);
    }

    const userNameExists = await db
      .select()
      .from(user)
      .where(eq(user.userName, userData.userName));

    if (userNameExists.length) {
      throw new CustomError('This User Name already Exits', 409);
    }

    //store the user

    const [createdUser]: User[] = await db
      .insert(user)
      .values(userData)
      .returning();

    //create a jwt token

    const token = createJwtTokens(
      createdUser.id,
      createdUser.userName,
      createdUser.email,
    );
    //return the jwt token

    return res.status(201).json({ token });
  } catch (_err) {
    
    if (_err instanceof z.ZodError) {
      console.log(_err.issues);
    }

    const err = _err as CustomError;
    return res
      .status(err.statusCode ?? 500)
      .json({ message: err.message ?? 'Internal Server Error' });
  }
};

export default signUp;
