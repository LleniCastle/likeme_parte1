import { Router } from 'express';

import {
    getAllPost,
    createPost,
    upDatePost,
    deletePost,
    likePost
} from '../controllers/posts.controller.js';

const router = Router();

router.get('/posts', getAllPost);

router.post('/posts', createPost);

router.put('/posts/:id', upDatePost);

router.put('/posts/like/:id', likePost);

router.delete('/posts/:id', deletePost);

export default router;