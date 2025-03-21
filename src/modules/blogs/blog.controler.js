import { blogModel } from "./blog.model.js"

export const getAllBlog = async(req , res)=>{
    try{
        const result = await blogModel.find();
        res.json({
            message : "Blog  Found",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const getSingalBlog = async(req, res)=>{
    try{
        const id = req.params.id;
        const result = blogModel.findById({_id: id});
        res.json({
            message : "get Sucess Blog",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const createBlogControler = async(req, res)=>{
    try{
        const {content, image} = req.body;
        if(content === "" || image === ""){
            return res.json({
                message : "Wrong Inputs",
                data : null
            })
        }
        const result = await blogModel.create({content, image});
        return res.json({
            message : "Blog Create Successfull",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}

export const updateBlogControler = async(req, res)=>{
    try{
        const {content, image} = req.body
        const id = req.params.id;
        const result = await blogModel.findByIdAndUpdate({_id:id}, {$set:{content, image}});
        return res.json({
            message : "Update Success",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}


export const deleteBlog = async(req, res)=>{
    try{
        const id = req.params.id;
        const result = await blogModel.findOneAndDelete({_id: id});
        return res.json({
            message : "Blog Delete Success",
            data : result
        })
    }catch(err){
        console.log(err)
    }
}