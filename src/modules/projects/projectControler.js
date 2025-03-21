import { projectModel } from "./projects.model.js"

export const createProject = async(req , res)=>{
    try{
        const result = await projectModel.create(req.body);
        return res.json({
            message : "Project Create Success",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const getAllProject = async(req , res)=>{
    try{
        const result = await projectModel.find();
        return res.json({
            message : "All Project Found",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const getSingalProject = async(req , res)=>{
    try{
        const id = req.params.id;
        const result = await projectModel.findById({_id: id});
        return res.json({
            message : "Get Success",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const updateProjects = async(req , res)=>{
    try{
        const {image, content} = req.body;
        const id = req.params.id;
        const result = await projectModel.findByIdAndUpdate({_id: id}, {$set:{image, content}});
        return res.json({
            message : "Project update Successfull",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const projectDelete = async(req , res)=>{
    try{
        const id = req.params.id;
        const result = await projectModel.deleteOne({_id: id});
        return res.json({
            message : "Project Delete Success",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}