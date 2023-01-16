import User from "../models/user.model.js";
import BadRequestError from "../errors/bad-request.js";
import { StatusCodes } from "http-status-codes";
const register = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    throw new BadRequestError("Please provide all the values");
  }
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const userNameAlreadyExists = await User.findOne({ email });
  if (userNameAlreadyExists) {
    throw new BadRequestError("User Name in use");
  }
  const user = await User.create({ userName, email, password });
  user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      username: user.userName,
      email: user.email,
    },
  });
};

export { register };
