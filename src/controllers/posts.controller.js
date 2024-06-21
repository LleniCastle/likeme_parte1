import { createPostModel, getAllPostModel } from '../models/posts.model.js';

export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostModel();
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error al obtener todos los posts:', error);
        res.status(500).json({ error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body;
        const newPost = await createPostModel({ titulo, img, descripcion, likes });
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error al crear el post:', error);
        res.status(500).json({ error: error.message });
    }
}