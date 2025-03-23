import express from "express";
import { createBlogControler, deleteBlog, getAllBlog, getSingalBlog, updateBlogControler } from "./blog.controler.js";
import { tokenVerify } from "../../middleware/authCheck.js";

const router = express.Router();

router.get("/get-blog", getAllBlog);
router.get("/get-singal-blog/:id", getSingalBlog);
router.patch("/update-blog/:id", tokenVerify, updateBlogControler)
router.delete("/delete-blog/:id", tokenVerify, deleteBlog)
router.post("/create-blog", tokenVerify, createBlogControler)
export const blogRouter = router;