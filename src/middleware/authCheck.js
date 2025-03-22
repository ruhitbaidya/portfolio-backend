import jwt from "jsonwebtoken"
import { config } from "../config/config";
export const tokenVerify = async(req , res , next)=>{
    try{
        const token = req.headers.authorization;
        console.log(token)
        if(!token){
            return res.json({
                message : "Unauthorize User",
                success : false
            }) 
        }

        if(token){
            const verify = jwt.verify(token, config.token_sec);
            console.log(verify)
        }
    }catch(err){
        return res.json({
            message : "Unauthorize User",
            success : false
        })
    }
}