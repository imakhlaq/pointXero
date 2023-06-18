import jwt from "jsonwebtoken";
import config from "../config/envConfig";

const createJwtTokens = (userId: String, userName: String, email: String) => {
  //create a jwt token

  return jwt.sign(
    {
      userId,
      userName,
      email,
    },
    config.SECRET_KEY!,
    { expiresIn: config.JWT_EXPIRES! }
  );
};
export default createJwtTokens;
