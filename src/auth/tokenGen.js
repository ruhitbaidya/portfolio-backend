import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const getToken = async()=>{
    const token =  jwt.sign({role : "admin"}, config.token_sec, {expiresIn: "2d"});
    return token
}