const mongoose = require("mongoose");
// const validator = require("validator");

// const authorSchema = new mongoose.Schema(
//     {
//         fullName: { type: String, required: true, maxLength: 25 },
//         twitterHandle: { type: String },
//         email: {
//             type: String,
//             maxLength: 50,
//             required: true,
//             validate: (value) => validator.isEmail(value)
//         },
//         image: { type: String, validate: (value) => validator.isURL(value) },
//     },
//     { _id: false }
// );

// const blogSchema = new mongoose.Schema(
//     {
//         title: { type: String, required: true, unique: true },
//         author: { type: [authorSchema] },
//         content: { type: String, default: "" },
//         publishedAt: { type: Date, default: null },
//     },
//     { timestamps: true }
// );

// const blogModel = mongoose.model("Blogs", blogSchema);

// module.exports = blogModel
