import jwt, { Secret, JwtPayload, SignOptions } from "jsonwebtoken";
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: JwtPayload;
      JWT_SECRET: Secret;
      JWT_LIFETIME: string;
    }
  }
}
export {};
