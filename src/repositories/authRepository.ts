import { prisma } from "../database.js"


async function getUserByEmail(email: string){
    return prisma.users.findFirst({
        where: {
            email
        }
    });
}
async function createUser(name: string, email: string, password: string){
    await prisma.users.create({
        data: {
            name,
            email,
            password
        
        }
    })
}

export default {
    getUserByEmail,
    createUser,
}