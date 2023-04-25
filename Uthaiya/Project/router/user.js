import express from "express";
import { otpGenrate, userReg} from "../controller/user.js";
const router = express.Router();

router.post("/register",userReg)
router.post("/otpGenerate",otpGenrate)

export default router;