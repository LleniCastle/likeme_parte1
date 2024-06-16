import express from 'express';
import cors from 'cors';
import { logger } from "logger-express";
import path from 'path';
import postRouter from './src/routes/posts.routes.js';
//import config  from './database/config.js';
import 'dotenv/config'; 

const PORT = process.env.PORT || 3000;

//middleware
const app = express();
app.use(express.json()) //se indica a express que trabajaremos con json
app.use(cors());
app.use(logger());

const __dirname = path.resolve();

app.use('/', postRouter);


app.listen(PORT, () => {
    console.log(`¡Servidor encendido! http://localhost:${PORT}`);
});













