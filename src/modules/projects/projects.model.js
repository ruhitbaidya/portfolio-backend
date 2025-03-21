import {model, Schema} from "mongoose";

const projectSchema = new Schema({
    image : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    }
}, {
    timestamps:true
});

export const projectModel = model("projects", projectSchema)