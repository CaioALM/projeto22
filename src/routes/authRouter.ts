import Router from 'express';
import authController from '../controllers/authController.js';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware.js';
import authSchema from '../schemas/authSchema.js'

const authRouter = Router();

authRouter.post("/register",  validateSchemaMiddleware(authSchema.registerSchema), authController.createUser)
authRouter.post("/login",  validateSchemaMiddleware(authSchema.loginSchema), authController.login)

export default authRouter;