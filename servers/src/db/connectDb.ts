import mongoose from "mongoose";

const connectDb = async (url: any) => {
  mongoose.set("strictQuery", false);
  mongoose.connect(url, () => {
    console.log("connected to db");
  });
};

export default connectDb;
