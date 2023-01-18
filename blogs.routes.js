const { createNewBlog, searchBlogs, getAllBlogs, deleteBlogWithId, updateBlog } = require('../controllers/blogs.controller');

const router = require('express').Router();

router.get("/", getAllBlogs); //api/blogs
router.get("/search", searchBlogs); //api/blogs/search
router.post("/new", createNewBlog); //api/blogs/new
router.patch("/:id", updateBlog); //api/blogs/63bedc7dc0e67dfd26d0c1e7
router.delete("/:id", deleteBlogWithId); //api/blogs/63bedc7dc0e67dfd26d0c1e7

module.exports = router;
