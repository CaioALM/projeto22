import authService from '../services/authService.js'
import { Request, Response } from 'express';

async function createUser(req: Request, res: Response) {
    const {name, email, password} = req.body

    await authService.createUser(name, email, password)
    res.sendStatus(201)
}

function login(req: Request, res: Response) {

}

export default {
    createUser,
    login
};