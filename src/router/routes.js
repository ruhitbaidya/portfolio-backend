import express from "express";
import { skillRouter } from "../modules/skills/skill.router.js";
const router = express.Router();
const routers = [
    {
        path : "/",
        element : skillRouter
    }
];





routers.forEach((item)=> router.use(item.path, item.element));

export const rootRouter = router