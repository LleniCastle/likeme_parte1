import pg from 'pg';

import "dotenv/config" //version 20 inferior . ACAA HAY QUE INSTALAR DOTENV

process.loadEnvFile(); // VIENE NATIVO .... NO HAY QUE INSTALAR NADA

// CON VARIABLES DE ENTORNO:
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const pool = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Error connecting to DB:', err);
    } else {
        console.log('🔋 DB-Connected', res.rows[0].now);
    }
});

export default pool;
