import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import authRoute from "./routes/authRoutes.js";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
dotenv.config();
const app = express();
const url = process.env.MONGO_URI;
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// own middleware
app.use("/api/v1/auth", authRoute);

// error handling middlware and notfoundmiddleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
