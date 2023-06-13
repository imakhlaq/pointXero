import { Request, Response } from 'express';
import { User } from '../../db/schema/users';
import db from '../../db/database';
import { user } from '../../db/schema/users';
import { eq } from 'drizzle-orm';
import * as bcrypt from 'bcrypt';
import createJwtTokens from '../../utils/createJwtTokens';

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
      return res.status(404).json({ message: 'In valid user name' });
    }

    const passMatch = await bcrypt.compare(
      userData.password,
      userInDB.password,
    );

    if (!passMatch) {
      return res.status(404).json({ message: 'In valid password' });
    }

    const token = createJwtTokens(
      userInDB.id,
      userInDB.userName,
      userInDB.email,
    );

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(502).json({ message: 'Internal Server Error' });
  }
};

export default logIn;
