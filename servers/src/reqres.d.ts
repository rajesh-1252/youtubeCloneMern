import {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
  Errback,
} from "express";

export interface ReqRes {
  req: Request;
  res: Response;
}

export interface Nxt extends ReqRes {
  next: NextFunction;
}

export interface ErrorMid extends ReqRes {
  err: any;
  next: NextFunction;
}

export {};
