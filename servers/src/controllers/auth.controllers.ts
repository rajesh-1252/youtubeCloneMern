import { Request, Response } from "express";
import userModel from "../models/user.model";
import { BadRequestError, UnAuthenticatedError } from "../error";
import { StatusCodes } from "http-status-codes";
import { allValuesError } from "../utils/allValuesError";

const register = async (req: Request, res: Response) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  const emailAlreadyExists = await userModel.findOne({ email });
  // if (emailAlreadyExists) {
  //   throw new BadRequestError("Email already in use");
  // }
  const userNameAlreadyExists = await userModel.findOne({ email });
  // if (userNameAlreadyExists) {
  //   throw new BadRequestError("User Name in use");
  // }
  const user = await userModel.create({ userName, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      userName: user.userName,
      email: user.email,
    },
    token,
  });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  allValuesError([email, password]);

  // user is the instance method
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect: boolean = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

export { register, login };
