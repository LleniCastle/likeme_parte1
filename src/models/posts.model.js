import pool from '../../database/config.js';

//UUID

//GET ALL POSTS
export const getAllPostModel = async () => {
    const sqlQuery ={ text: 'SELECT * FROM posts'};
    try {
        const result = await pool.query(sqlQuery);
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.error('Error al obtener todos los posts:', error);
        throw error;
    }
}

//CREATE POST
export const createPostModel = async ({titulo, img, descripcion, likes=0}) => {
    const sqlQuery ={
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1,$2,$3,$4) RETURNING *',
        values: [titulo, img, descripcion, likes],
    };
    try {
        const result = await pool.query(sqlQuery);
        return result.rows[0];
    } catch (error) {
        console.error('Error al crear el post:', error);
        throw error;
    }
}
