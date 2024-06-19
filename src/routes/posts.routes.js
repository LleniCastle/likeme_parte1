import { Router } from 'express';

import {
    getAllPost,
    createPost,
    hola
} from '../controllers/posts.controller.js';

const router = Router();

router.get('/posts', getAllPost);

router.post('/posts', createPost);

export default router;
