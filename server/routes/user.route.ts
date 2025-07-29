import express from 'express';
import { activateUser, loginUser, logoutUser, registerationUser } from '../controllers/user.controller';
import { isAutheticated } from '../middleware/auth';
const userRouter = express.Router();


userRouter.post('/registration', registerationUser);
userRouter.post('/activate-user', activateUser);
userRouter.post('/login', loginUser);
userRouter.get('/logout', isAutheticated, logoutUser);

export default userRouter;