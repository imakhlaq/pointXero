import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/envConfig";
import { prisma } from "../db/database";

declare module "jsonwebtoken" {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
    userId: string;
    userName: string;
    email: string;
  }
}

const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("authorization");
  const token = authHeader?.split(" ")[1];

  //verifying token
  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      errors: [{ message: "JWT token is not present in the request" }],
    });
  }

  try {
    const data = <jwt.UserIDJwtPayload>jwt.verify(token, config.SECRET_KEY!);
    const user = await prisma.user.findUnique({ where: { id: data.userId } });
    if (user?.role !== "admin") {
      return res.status(404).json({
        statusCode: 404,
        errors: [{ message: "Unauthorized Access" }],
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      statusCode: 401,
      errors: [{ message: "JWT token is invalid signature" }],
    });
  }
};

export default adminAuth;
