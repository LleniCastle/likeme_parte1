import { text } from 'express';
import pool from '../../database/config.js';

//UUID

//GET ALL POSTS
export const getAllPostModel = async () => {
    const sqlQuery = { text: 'SELECT * FROM posts' };
    try {
        const result = await pool.query(sqlQuery);
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error('error al obtener todos los posts:', error);
        throw error;
    }
}

//CREATE POST
export const createPostModel = async ({ titulo, img, descripcion, likes = 0 }) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *',
        values: [titulo, img, descripcion, likes],
    };
    try {
        const result = await pool.query(sqlQuery);
        return result.rows[0];
    } catch (error) {
        console.error('error al crear el post:', error);
        throw error;
    }
}

//ACTUALIZAR

export const upDatePostModel = async ({ id, titulo, img, descripcion, likes }) => {
    const sqlQuery = {
        text: 'UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *',
        values: [titulo, img, descripcion, likes, id],
    };
    try {
        console.log("Updating post with id:", id);
        const result = await pool.query(sqlQuery);
        console.log("Post updated:", result.rows[0]);
        return result.rows[0];
    } catch (error) {
        console.error('error al actualizar el post en el modelo:', error);
        throw error;
    }
}


//ELIMINAR

export const deletePostModel = async (id) => {
    const sqlQuery = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id],
    };

    try {
        await pool.query(sqlQuery);
    } catch (error) {
        console.error('error al eliminar el post en el modelo:', error);
        throw error;
    }
};

// LIKE POST
export const likePostModel = async (id) => {
    const sqlQuery = {
        text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
        values: [id],
    };
    try {
        const result = await pool.query(sqlQuery);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
};
