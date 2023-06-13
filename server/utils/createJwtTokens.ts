import jwt from 'jsonwebtoken';
import config from '../config/envConfig';

const createJwtTokens = (userId: String, userName: String, email: String) => {
  //create a jwt token

  const token = jwt.sign(
    {
      userId,
      userName,
      email,
    },
    config.SECRET_KEY!,
    { expiresIn: config.JWT_EXPIRES! },
  );

  return token;
};
export default createJwtTokens;
