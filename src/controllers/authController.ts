import authService from '../services/authService.js'
import { Request, Response } from 'express';

async function createUser(req: Request, res: Response) {
    const {name, email, password} = req.body

    await authService.createUser(name, email, password)
    res.sendStatus(201)
}

async function login(req: Request, res: Response) {
    const {email, password} = req.body
    const token = await authService.login(email, password)
    res.status(200).send({token})
}

export default {
    createUser, 
    login
};