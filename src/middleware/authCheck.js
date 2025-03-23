import jwt from "jsonwebtoken"
import { config } from "../config/config.js";
export const tokenVerify = async(req , res , next)=>{
    try{
        const token = req.headers.authorization;
        if(!token){
            return res.json({
                message : "Unauthorize User",
                success : false
            }) 
        }

        if(token){
            const verify = jwt.verify(token, config.token_sec);
            if(verify.role === "admin"){
                next()
            }else{
                return res.json({
                    message : "Unauthorize User",
                    success : false
                }) 
            }
        }
    }catch(err){
        return res.json({
            message : "Unauthorize User",
            success : false
        })
    }

}


