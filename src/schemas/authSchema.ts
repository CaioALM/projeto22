import joi from "joi";

const registerSchema = joi.object({
    name: joi.string().required(),
    age: joi.number().required(),
    belt: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
})

const loginSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
})

export default {
    registerSchema,
    loginSchema
};