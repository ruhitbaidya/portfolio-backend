import express from "express";
import { createProject, getAllProject, getSingalProject, projectDelete, updateProjects } from "./projectControler.js";

const router = express.Router();

router.get("/getAllProject", getAllProject);
router.post("/create-project", createProject);
router.get("/get-siangal-project/:id", getSingalProject);
router.patch("/update-project/:id", updateProjects);
router.delete("/delete-project/:id", projectDelete);


export const projectRouter = router