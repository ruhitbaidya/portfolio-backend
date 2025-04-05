import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const getToken = async () => {
  try {
    const token = jwt.sign({ role: "admin" }, config.token_sec, {
      expiresIn: "2d",
    });
    return token;
  } catch (err) {
    console.log(err);
  }
};
