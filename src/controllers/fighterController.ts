import { Request, Response } from 'express';
import fighterService from '../services/fighterService.js'

async function getPayments(req: Request, res: Response) {
    const userId = res.locals.userId;
    const payments = await fighterService.getPayments(userId)
    res.status(200).send(payments);
}
async function updatePayments(req: Request, res: Response) {
    const userId = res.locals.userId;
    const paymentId = Number(req.params.paymentId)
    await fighterService.updatePayments(userId, paymentId)
    res.sendStatus(201)
}


export default {
    getPayments,
    updatePayments,
};