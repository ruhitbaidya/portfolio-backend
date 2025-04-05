import { model, Schema } from "mongoose";


const subscribeSchema = new Schema({
    email : {
        type : String,
        required : true
    }
}, {timestamps : true});


export const subscribeModel = model("subscribe", subscribeSchema);