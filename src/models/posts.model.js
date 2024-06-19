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
        console.log(error);
    }
}

//CREATE POST
export const createPostModel = async ({titulo, img, description, likes}) => {
    const sqlQuery ={
        text: 'INSERT INTO post (titulo, img, description, likes) VALUES ($1,$2,$3,$4) RETURNING *',
        values: [id, titulo, img, description, likes],
    };
    try {
        const result = await pool.query(sqlQuery);
        return result.rows[0];
    } catch (error) {
        console.log(error);
    }
}
