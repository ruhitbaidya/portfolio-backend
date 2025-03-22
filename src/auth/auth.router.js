import express from "express";
import { loginControler } from "./auth.login.js";

const router = express.Router();

router.post("/login", loginControler);

export const loginRouter = router