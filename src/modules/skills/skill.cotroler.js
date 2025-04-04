import { skillModel } from "./skill.mode.js";

export const skillControler = async (req, res) => {
  try {
    const result = await skillModel.find();
    res.json({
      message: "Data Get Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createSkillControler = async (req, res) => {
  try {
    const { icon, title, color } = req.body;
    if (icon === "" || title === "", color === "") {
      return res.json({
        message: "please give reall information",
        status: 404,
      });
    }

    const result = await skillModel.create(req.body);

    return res.json({
      message: "skill create Sucessfull",
      data: result,
    });
  } catch (err) {
    return res.json({
      message: "something went wrong",
      data: err.message,
    });
  }
};

export const deleteSkillControler = async (req, res) => {
  try {
    const id = req?.params?.id;
    const result = await skillModel.deleteOne({ _id: id });
    res.json({
      message: "Data deleted",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateSkillControler = async (req, res) => {
  try {
    console.log(req.params.id);
    const foundSkill = await skillModel.findById(req.params.id);
    console.log(foundSkill);
    if (foundSkill) {
      return res.send({
        message: "found Users",
        status: 200,
      });
    } else {
      return res.send({
        message: "this id skill not found",
        status: 404,
      });
    }
  } catch (err) {}
};
