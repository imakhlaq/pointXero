import { Request, Response } from 'express';
import db from '../../db/database';
import { NewUser, User, user } from '../../db/schema/users';
import * as bcrypt from 'bcrypt';
import { eq } from 'drizzle-orm';
import config from '../../config/envConfig';
import jwt from 'jsonwebtoken';
const logIn = async (req: Request, res: Response) => {
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

    if (!emailExists) {
      res.status(409).json({
        message: 'This Email already Exits',
      });
    }

    const userNameExists = await db
      .select()
      .from(user)
      .where(eq(user.userName, userData.userName));

    if (!userNameExists) {
      res.status(409).json({
        message: 'This User Name already Exits',
      });
    }

    //store the user

    const [createdUser]: User[] = await db
      .insert(user)
      .values(userData)
      .returning();

    //create a jwt token

    const token = jwt.sign(
      {
        id: createdUser.id,
        userName: userData.firstName,
      },
      config.SECRET_KEY!,
      { expiresIn: '10hr' },
    );

    //return the jwt token

    res.status(201).json({ token });
  } catch (err) {
    res.status(502).json({ message: 'Internal Server Error' });
  }
};

export default logIn;
