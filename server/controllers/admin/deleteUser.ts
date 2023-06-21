import { Request, Response } from "express";
import CustomError from "../../utils/CustomError";
import { prisma } from "../../db/database";
import customError from "../../utils/CustomError";
import formatError from "../../utils/formatError";

async function deleteUser(req: Request, res: Response) {
  const { userId } = req.params;

  try {
    if (!userId) {
      throw new CustomError("User Id is missing", 402);
    }
    const userDelete = await prisma.user.delete({ where: { id: userId } });

    return res
      .status(200)
      .json({ message: `${userDelete.username} is delete` });
  } catch (_err) {
    const err = _err as customError;
    return res.status(402).json(formatError(err));
  }
}

export default deleteUser;
