import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
dotenv.config()

export async function validateToken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token){
    throw { code: "Unauthorized", message: "Missing token" };
  }

  try{
   
    const userId = jwt.verify(token, process.env.JWT_TOKEN)

    res.locals.userId = userId;
  
    next();
  }catch (err) {
    return res.status(401).send("Invalid token");
  }

 
}