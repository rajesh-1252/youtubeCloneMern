import mongoose, { Model, Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../error";

const UserSchema: Schema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Provide Name"],
    // unique: [true, "Account with this Email Id already exist"],
  },
  password: {
    type: String,
    required: [true, "Please Provide password"],
    minlength: 6,
    select: false,
  },
  videos: {
    type: Schema.Types.ObjectId,
    ref: "videos",
  },
  // subscriber of my channel
  subscribers: {
    type: Array,
    default: [],
  },
  // the channel that im subscribing aka(following)
  userSubscribedChannel: {
    type: Array,
    default: [],
  },
  playlist: {},
});

UserSchema.pre("save", async function () {
  console.log(this.isModified(this.password));
  console.log(this.password);

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  if (!process.env.JWT_SECRET) {
    throw new Error("jwt secret must me defined");
  }
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (
  incomingPassword: string
): Promise<boolean> {
  const ismatch: boolean = await bcrypt.compare(
    incomingPassword,
    this.password
  );
  return ismatch;
};

export default mongoose.model("user", UserSchema);
