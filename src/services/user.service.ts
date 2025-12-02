import { Role } from "@prisma/client";
import prisma from "../config/database";
import { hashPassword } from "../utils/hash";

export const createUser = async (data : {name : string,email : string,password : string,role? : Role}) => {
    const {name,email,password,role} = data;

    const existEmail = await prisma.user.findUnique({where : {email}});
    if(existEmail) throw new Error("Email Already Exist");

    const hashed = await hashPassword(password);

    return prisma.user.create({
        data : {
            name,
            email,
            password : hashed,
            role
        }
    })   
}