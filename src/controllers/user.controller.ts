import { Request, Response } from "express"
import { createUser } from "../services/user.service"

export const register = async (req:Request,res:Response) => {
    try {
        const user = await createUser(req.body)
        const { password: _, ...safeUser } = user;
        res.status(201).json({success : true,safeUser})
        
    } catch (error: any) {
        res.status(400).json({error:error.message})
    } 
}