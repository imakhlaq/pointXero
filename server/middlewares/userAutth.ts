import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/envConfig";

const userAuth = async (req: Request, res: Response, next: NextFunction) => {
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
    const data = jwt.verify(token, config.SECRET_KEY!);
    console.log(data);
    next();
  } catch (err) {
    return res.status(401).json({
      statusCode: 401,
      errors: [{ message: "JWT token is invalid signature" }],
    });
  }
};

export default userAuth;
