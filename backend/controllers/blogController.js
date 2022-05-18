import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

// Create Blog
// @POST request
const createBlog = asyncHandler(async (req, res) => {
  const { userName, title, basePicture, content } = req.body;

  const blog = new Blog({
    user: req.user._id,
    userName,
    title,
    basePicture,
    content,
  });
  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// Update Blog
// @PUT request
const updateBlog = asyncHandler(async (req, res) => {
  const { userName, title, basePicture, content } = req.body;

  const existedBlog = await Blog.find({
    _id: req.params.id,
    user: req.params.userId,
  });

  if (existedBlog) {
    existedBlog[0].userName = userName;
    existedBlog[0].title = title;
    existedBlog[0].basePicture = basePicture;
    existedBlog[0].content = content;
    const updatedBlog = await existedBlog[0].save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// Delete Blog
// @DELETE request
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.find({
    _id: req.params.id,
    user: req.params.userId,
  });
  if (blog) {
    await blog[0].remove();
    res.json({ message: "Blog removed" });
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// Read All Blog
// @GET request
const getAllBlog = asyncHandler(async (req, res) => {
  const allBlogs = await Blog.find({});

  if (allBlogs.length !== 0) {
    res.json(allBlogs);
  } else {
    res.status(404);
    throw new Error("No Blogs found");
  }
});

// Read Blog By Id
// @GET request
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById({ _id: req.params.id });

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("No Blog found");
  }
});

// Read Blog By Id
// @GET request
const getAllBlogOfSingleUser = asyncHandler(async (req, res) => {
  const blog = await Blog.find({
    user: req.params.userId,
  });

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("No Blogs found");
  }
});

export {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getAllBlog,
  getAllBlogOfSingleUser,
};
