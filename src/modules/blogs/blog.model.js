import {model, Schema} from "mongoose"

const blogSchema = new Schema({
    image : {
        type : String,
        required : true
    },
    content : {
        type : String,
        require : true
    }
}, {timestamps : true});


export const blogModel = model("blog", blogSchema)