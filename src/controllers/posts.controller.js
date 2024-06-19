import { createPostModel, getAllPostModel } from '../models/posts.model.js';

export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostModel();
        res.status(200).json({ posts: posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { post } = req.body;
        const newPost = await createPostModel(post);
        res.status(201).json({ post: newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
