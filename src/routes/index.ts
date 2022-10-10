import { Router } from "express";
import authRouter from './authRouter.js'
import fighterRouter from './fighterRouter.js'

const router = Router();
router.use(authRouter)
router.use(fighterRouter)

export default router;