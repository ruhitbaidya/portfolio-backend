import { subscribeModel } from "./subscribe.model";


export const subscribeCreateControler = async(req ,res)=>{
    try{
        const email = req.body;
        const result = await subscribeModel.create(email)
        res.status(200).json({message : "Subscribe Successfull"})
    }catch(err){
        res.status(403).json({message : "Forbeden Error"})
    }
}

export const getAllSubscribeControler = async(req ,res)=>{

}
