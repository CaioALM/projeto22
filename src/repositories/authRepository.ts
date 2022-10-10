import { prisma } from "../database.js"
import {Belt} from '@prisma/client'

async function getUserByEmail(email: string){
    return prisma.users.findFirst({
        where: {
            email
        }
    });
}

async function createUser(name: string, age: number, belt: Belt, email: string, password: string){
    await prisma.users.create({
        data: {
            name, 
            age,
            belt,
            email,
            password
        },
    })
}

export default {
    getUserByEmail,
    createUser,
}