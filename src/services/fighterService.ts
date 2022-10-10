import fighterRepository from '../repositories/fighterRepository.js'
import dayjs from 'dayjs'

async function getPayments(userId: number) {
    
    const payments = await fighterRepository.getPayments(userId)

    if (!payments) {
        await populatePayments(userId)
        const result = await fighterRepository.getPayments(userId)
        return result 
    }
    return payments 
}

async function updatePayments(userId: number, paymentId: number) {
    
    const payment = await fighterRepository.getPaymentsById(paymentId);

    if (!payment) {
        throw { code: "not_found", message: "There is no payment with this id" };
    }
    if (payment.userId !== userId) {
        throw { code: "Unauthorized", message: "You have no permission to that" };
    }
    const payedAt = dayjs().format('MM/YYYY')
    const payd = true

    await fighterRepository.updatePaymentById(paymentId, payd, payedAt)
   
}

async function populatePayments(userId: number) {
    const month = dayjs().month()
    const year = dayjs().year()
  
    for(let i=0 ; i<13 ; i++) {
    let j = 0
    if (i + month >= 12) {
      j = j+1
    } 
    const monthYear = dayjs().set('month', month+i).set('year', year+j).format('MM/YYYY').toString()
    const payedAt = null
    const payd = false
    
    await fighterRepository.createPayments(userId, monthYear, payd, payedAt)
    }
    
  }
        
export default {
    getPayments,
    updatePayments
    
}