import express from "express";
import { createBlogControler, deleteBlog, getAllBlog, getSingalBlog, updateBlogControler } from "./blog.controler.js";

const router = express.Router();

router.get("/get-blog", getAllBlog);
router.get("get-singal-blog/:id", getSingalBlog);
router.patch("/update-blog/:id", updateBlogControler)
router.delete("/delete-blog/:id", deleteBlog)
router.post("/create-blog", createBlogControler)
export const blogRouter = router;