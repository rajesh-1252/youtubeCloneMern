import { ReqRes } from "../reqres";
const notFoundMiddleware = ({ req, res }: ReqRes) => {
  res.status(404).send("Route does not exist");
};
export default notFoundMiddleware;
