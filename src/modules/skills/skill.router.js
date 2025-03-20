import express from "express";
import { createSkillControler, skillControler, updateSkillControler } from "./skill.cotroler.js";

const router = express.Router();


router.get("/get-skills", skillControler);
router.post("/create-skills", createSkillControler)
router.patch("/update-skills/:id", updateSkillControler)
// router.delete("/remove-skill", )

export const skillRouter = router