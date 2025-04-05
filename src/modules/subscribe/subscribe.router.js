import express from "express";
import {
  getAllSubscribeControler,
  subscribeCreateControler,
} from "./subscribe.controler.js";

const router = express.Router();

router.post("/subscribe", subscribeCreateControler);
router.get("/get-subscribe", getAllSubscribeControler);
export const subscribeRouter = router;
