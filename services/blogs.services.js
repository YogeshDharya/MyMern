const Blogs = require("../models/blogs.model");

class BlogService {
    find = async () => {
        const allBlogs = await Blogs.find({});
        return allBlogs;
    };

    create = async (body) => {
        const newDoc = new Blogs(body);
        const savedDoc = await newDoc.save();
        return savedDoc;
    };
}

module.exports = BlogService;