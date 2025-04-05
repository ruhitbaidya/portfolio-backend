import express from "express";
import { subscribeCreateControler } from "./subscribe.controler";

const router = express.Router();


router.post("/subscribe", subscribeCreateControler);

export const subscribeRouter = router