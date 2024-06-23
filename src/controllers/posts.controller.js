import { createPostModel, getAllPostModel, upDatePostModel, deletePostModel, likePostModel } from '../models/posts.model.js';

export const getAllPost = async (req, res) => {
    try {
        const posts = await getAllPostModel();
        res.status(200).json(posts);
    } catch (error) {
        console.error('error al obtener todos los posts:', error);
        res.status(500).json({ error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { titulo, img, descripcion, likes } = req.body;
        const newPost = await createPostModel({ titulo, img, descripcion, likes });
        res.status(201).json(newPost);
    } catch (error) {
        console.error('error al crear el post:', error);
        res.status(500).json({ error: error.message });
    }
};

export const upDatePost = async (req, res) => {
    const { id } = req.params;
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const updatedPost = await upDatePostModel({ id, titulo, img, descripcion, likes });
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error('error al actualizar el post:', error);
        res.status(500).json({ error: error.message });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    try {
        await deletePostModel(id);
        res.status(204).send(); 
    } catch (error) {
        console.error('error al eliminar el post:', error);
        res.status(500).json({ error: error.message });
    }
};

export const likePost = async (req, res) => {
    try {
        const post = await likePostModel(req.params.id);
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'error al dar like al post', error });
    }
};