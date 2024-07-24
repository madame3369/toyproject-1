import express from 'express';
import { register, login, getUserInfo } from '../controllers/userController';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUserInfo);

export default router;