import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api";

class UnAuthenticatedError extends CustomApiError {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export default UnAuthenticatedError;
