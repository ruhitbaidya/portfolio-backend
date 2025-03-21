import express from "express";
import { createSkillControler, deleteSkillControler, skillControler, updateSkillControler } from "./skill.cotroler.js";

const router = express.Router();


router.get("/get-skills", skillControler);
router.post("/create-skills", createSkillControler)
router.delete("/remove-skill/:id", deleteSkillControler)

export const skillRouter = router