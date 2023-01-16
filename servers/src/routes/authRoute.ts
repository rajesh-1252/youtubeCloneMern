import { Router } from "express";
import { login, register } from "../controllers/auth.controllers";
import { ReqRes } from "../reqres";
const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/gomala").get(({ req, res }: ReqRes) => {
  res.send("gomala");
});
export default router;
