import express from "express";
import { skillRouter } from "../modules/skills/skill.router.js";
import { blogRouter } from "../modules/blogs/blog.router.js";
import { projectRouter } from "../modules/projects/project.router.js";
const router = express.Router();
const routers = [
    {
        path : "/",
        element : skillRouter
    },
    {
        path: "/",
        element : blogRouter
    },
    {
        path : "/",
        element : projectRouter
    }
];





routers.forEach((item)=> router.use(item.path, item.element));

export const rootRouter = router