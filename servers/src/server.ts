import express from "express";
import "express-async-errors";
import { Application, Request, Response, NextFunction } from "express";
import connectDb from "./db/connectDb";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import fileUpload from "express-fileupload";
import errorHandlerMiddleware from "./middleware/error-handler";
import authRouter from "./routes/authRoute";
import { NotFoundError } from "./error";
import notFoundMiddleware from "./middleware/notFoundMiddleware";

const app: Application = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(fileUpload({ useTempFiles: true }));

//  own middleware

// route

app.use("/api/v1/auth", authRouter);

app.get("/api/v1/youtube", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(4000, () => console.log("server running"));
  } catch (error) {
    console.log(error);
  }
};

start();
