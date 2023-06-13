import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL,
  SECRET_KEY: process.env.SECRET_KEY,
};

export default config;
