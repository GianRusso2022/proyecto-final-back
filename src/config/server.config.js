import dotenv from 'dotenv';
dotenv.config();


const serverConfig = {
  PORT: process.env.PORT || 8080,
  MONGO_URI:
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_URI_PROD
      : process.env.MONGO_URI_DEV, 
  SESSION_SECRET: process.env.SESSION_SECRET,
  GH_CLIENT_ID: process.env.GH_CLIENT_ID,
  GH_CLIENT_SECRET: process.env.GH_CLIENT_SECRET,
  APP_ID: process.env.APP_ID,
  NODE_ENV: process.env.NODE_ENV || 'development',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
};

export default serverConfig;
