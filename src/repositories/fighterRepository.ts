import { prisma } from "../database.js"

async function getPayments(userId: number){
    return prisma.payments.findMany({
        where: {
            userId
        }
    });
}
async function createPayments(userId: number, monthYear: string,  payd: boolean, payedAt: Date) {
    await prisma.payments.create({
        data: {
            userId,  
            payd,
            payedAt,
            monthYear,
         
        }
    })
}

export default {
    getPayments,
    createPayments,

}