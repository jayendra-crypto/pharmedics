import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  getAllBlogOfSingleUser,
} from "../controllers/blogController.js";

router.post("/create", protect, createBlog);
router.put("/update/:userId/:id", protect, updateBlog);
router.delete("/delete/:userId/:id", protect, deleteBlog);

router.get("/", protect, getAllBlog);
router.get("/:id", protect, getBlogById);
router.get("/:userId", protect, getAllBlogOfSingleUser);

export default router;
