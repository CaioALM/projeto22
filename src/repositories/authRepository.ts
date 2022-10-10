import { prisma } from "../database.js"



async function getUserByEmail(email: string){
    return prisma.users.findFirst({
        where: {
            email
        }
    });
}

async function createUser(name: string, age: number, belt: string, email: string, password: string){
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