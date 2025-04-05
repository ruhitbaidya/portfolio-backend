import express from "express";
import { skillRouter } from "../modules/skills/skill.router.js";
import { blogRouter } from "../modules/blogs/blog.router.js";
import { projectRouter } from "../modules/projects/project.router.js";
import { loginRouter } from "../auth/auth.router.js";
import { subscribeRouter } from "../modules/subscribe/subscribe.router.js";
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
    },
    {
        path : "/",
        element : loginRouter
    },
    {
        path : "/",
        element : subscribeRouter
    }
];





routers.forEach((item)=> router.use(item.path, item.element));

export const rootRouter = router