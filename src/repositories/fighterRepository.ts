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
async function getPaymentsById(paymentId: number){
    return prisma.payments.findFirst({
        where: {
            id: paymentId
        }
    });
}
async function updatePaymentById(paymentId: number, payd: boolean, payedAt: string) {
    return prisma.payments.update({
        where: {
            id: paymentId
        },
        data: {
            payd,
            payedAt
        }
    });
}

export default {
    getPayments,
    createPayments,
    getPaymentsById,
    updatePaymentById

}