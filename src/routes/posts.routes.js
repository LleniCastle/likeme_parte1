import { Router } from 'express';

import {
    getAllPost,
    createPost,
} from '../controllers/posts.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('raiz');
});

router.get('/posts', getAllPost);

router.post('/posts', createPost);

export default router;