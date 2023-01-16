import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ErrorMid } from "../reqres";

// { err, req, res, next }: ErrorMid
interface Props {
  err: any;
  req: Request;
  res: Response;
  next: NextFunction;
}
const errorHandlerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Somthing went Wrong try again later",
  };

  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = Object.values(err.errors)
      .map((item: any) => item.message)
      .join(",");
  }

  if (err.code && err.code == 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} feild has to be unique`;
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
