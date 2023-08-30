import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/envConfig";

declare module "jsonwebtoken" {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
    userId: string;
    userName: string;
    email: string;
    role: string;
  }
}

const userAuth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authorization");

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
    req.body.userId = data.userId;

    next();
  } catch (err) {
    return res.status(401).json({
      statusCode: 401,
      errors: [{ message: "JWT token is invalid signature" }],
    });
  }
};

export default userAuth;
