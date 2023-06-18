import { NextFunction, Request, Response } from "express";

const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.header("Authentication");
  const token = authHeader?.split(" ")[1];

  console.log(token);

  res.json(token);
};

export default adminAuth;
