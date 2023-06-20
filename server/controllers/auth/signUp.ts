import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import createJwtTokens from "../../utils/createJwtTokens";
import CustomError from "../../utils/CustomError";
import { z, ZodError } from "zod";
import { prisma } from "../../db/database";
import type { User } from "@prisma/client";
import formatError from "../../utils/formatError";
import createUserDTO from "../../validations/createUserDTO";

const signUp = async (req: Request, res: Response) => {
  //hash the password

  try {
    const body = createUserDTO.parse(req.body);

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const userData = { ...body, password: hashedPassword };
    //check for username and email exits
    const emailExists = await prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (emailExists) {
      throw new CustomError("This Email already Exits", 409);
    }

    const userNameExists = await prisma.user.findUnique({
      where: { username: userData.username },
    });

    if (userNameExists) {
      throw new CustomError("This User Name already Exits", 409);
    }

    //store the user

    const createdUser = await prisma.user.create({ data: userData });

    //create a jwt token

    const token = createJwtTokens(
      createdUser.id,
      createdUser.username,
      createdUser.email
    );
    //return the jwt token

    return res.status(201).json({ token });
  } catch (_err) {
    if (_err instanceof ZodError) {
      return res.status(400).json(formatError(_err));
    }

    const err = _err as CustomError;
    return res.status(err.statusCode ?? 500).json(formatError(err));
  }
};

export default signUp;
