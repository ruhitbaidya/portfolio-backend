import { skillModel } from "./skill.mode.js";


export const skillControler = async(req, res)=>{
    res.json({
        message : "this will help us",
        status : 200
    })
}

export const createSkillControler = async(req, res)=>{
   try{
    const {image, title} = req.body;
    if(image === "" || title === ""){
        return res.json({
            message : "please give reall information",
            status : 404
        })
    }

    const result = await skillModel.create(req.body);

    return res.json({
        message : "skill create Sucessfull",
        data : result
    })
   }catch(err){
    return res.json({
        message : "something went wrong",
        data : err.message
    })
   }
}

export const updateSkillControler = async(req, res)=>{
    try{
        console.log(req.params.id)
        const foundSkill = await skillModel.findById(req.params.id);
        console.log(foundSkill)
        if(foundSkill){
            return res.send({
                message : "found Users",
                status : 200
            })
        }else{
            return res.send({
                message : "this id skill not found",
                status : 404
            })
        }
    }catch(err){

    }
}