import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: [true, "User name is required to create account "],
    // unique: [true, "Account with this user name already exist"],
  },
  email: {
    type: String,
    required: [true, "Email is required to create account"],
    unique: [true, "account with this email already exit"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlenght: 6,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "videos",
    },
  ],
  subscribers: {
    type: Array,
    default: [],
  },
  userSubscribedChannels: {
    type: Array,
    default: [],
  },
});
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.createJWT = function () {
  console.log(this);
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default model("User", UserSchema);
