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

// async function login(email: string, password: string) {
//     const user = await authRepository.getUserByEmail(email);
//     if (!user) throw { type: "Unauthorized", message: "Incorrect email or password"}

//     const isValid = bcrypt.compareSync(password, user.password);
//     if (!isValid) throw { type: "Unauthorized", message: "Incorrect email or password" };

//     const { id } = user;
//     const token = jwt.sign(String(id), process.env.JWT_TOKEN)

//     return token;
// }
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
    
}