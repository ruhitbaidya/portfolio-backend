import {model, Schema}  from "mongoose"

const skillsSchema = new Schema({
    image : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})


export const skillModel = model("skills", skillsSchema)