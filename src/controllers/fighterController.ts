import { Request, Response } from 'express';
import fighterService from '../services/fighterService.js'

async function getPayments(req: Request, res: Response) {
    const userId = res.locals.userId;
    const payments = await fighterService.getPayments(userId)
    res.status(200).send(payments);
}

async function login(req: Request, res: Response) {
    const {email, password} = req.body
    const token = await fighterService.login(email, password)
    res.status(200).send({token})
}

export default {
    getPayments, 
    login
};