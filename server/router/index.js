import Router from 'express';
import UserController from '../contollers/user-controller.js';
import { body } from 'express-validator';
import authMiddleware from '../middlewares/auth-middleware.js';

const router = new Router();

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    UserController.registration,
);
router.post(
    '/login',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    UserController.login,
);
router.post('/logout/', UserController.logout);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/users', authMiddleware, UserController.users);

export default router;
