import { getToken } from "./tokenGen.js";

export const loginControler = async(req , res)=>{
    try{
        const {email, password} = req.body;
        if(email === "ruhitbaidya01@gmail.com" && password === "ruhit017"){
            return res.json({
                message : "Successfull Login",
                token : await getToken()
            })
        }else{
            return res.json({
                message : "Wrong Email and password",
            })
        }
    }catch(err){
        console.log(err)
    }
}