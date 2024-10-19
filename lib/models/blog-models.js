import mongoose from "mongoose";

const schema = new mongoose.Schema({
    titles: {
        type: String,
        required: true,
    },
    descriptions: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true,
    },
    dates: {
        type: Date,
        default: Date.now,
        required: true,
    },
    categorys: {
        type: String,
        required: true,
    },
    authors: {
        type: String,
        required: true,
    },
    author_imges: {
        type: String,
        required: true,
    },
});
    
const BlogModel =mongoose.models.blog || mongoose.model("blog", schema);
export default BlogModel