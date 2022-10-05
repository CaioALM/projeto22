import bcrypt from 'bcrypt';
import authRepository from '../repositories/authRepository.js'
import jwt from 'jsonwebtoken'

async function createUser(name: string,email: string, password: string ) {
    const passwordHash = bcrypt.hashSync(password, 10)
    const user = await authRepository.getUserByEmail(email);

    if (user) {
        throw { type: "conflict", message: "Email already registered"}
    }

    await authRepository.createUser(name, email, passwordHash)
}

async function login (email: string, password: string) {
    const user = await authRepository.getUserByEmail(email);
    if (!user) throw { type: "Unauthorized", message: "Incorrect email or password"}

    const isValid = bcrypt.compareSync(password, user.password);
    if (!isValid) throw { type: "Unauthorized", message: "Incorrect email or password" };

    const { id } = user;
    const token = jwt.sign(String(id), process.env.JWT_TOKEN)
}

export default {
    createUser,
}