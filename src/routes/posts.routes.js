import { Router } from 'express';

import {
    getAllPost,
    createPost,
} from '../controllers/posts.controller.js';

const router = Router();

router.get('/posts', getAllPost);

router.post('/posts', createPost);

export default router;