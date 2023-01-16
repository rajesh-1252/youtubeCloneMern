import mongoose from "mongoose";
mongoose.set("strictQuery", true);
const connectDb = async (url) => {
  mongoose.connect(url, () => {
    console.log("connected to db...");
  });
};
export default connectDb;
