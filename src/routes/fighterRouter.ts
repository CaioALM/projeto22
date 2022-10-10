import Router from 'express';
import fighterController from '../controllers/fighterController.js';
import { validateToken } from '../middlewares/validateToken.js';

const fighterRouter = Router();

fighterRouter.get("/payments",  validateToken, fighterController.getPayments)
// fighterRouter.post("/login", authController.login)

export default fighterRouter;