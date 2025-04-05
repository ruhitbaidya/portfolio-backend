import { subscribeModel } from "./subscribe.model.js";

export const subscribeCreateControler = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);
    const find = await subscribeModel.findOne({ email });
    if (find) {
      return res.status(403).json({ message: "This Email Already Exist" });
    }
    const result = await subscribeModel.create({ email });
    res.status(200).json({ message: "Subscribe Successfull" });
  } catch (err) {
    res.status(403).json({ message: "Forbeden Error" });
  }
};

export const getAllSubscribeControler = async (req, res) => {
  try {
    const result = await subscribeModel.find();
    res.status(200).json({ message: "get all subscribe", data: result });
  } catch (err) {
    console.log(err);
  }
};
