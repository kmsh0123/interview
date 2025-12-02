import { Role } from "@prisma/client";
import prisma from "../config/database";
import { comparePassword, hashPassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

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

export const loginUser = async (data: { email: string; password: string }) => {
  const { email, password } = data;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid Email or Password");

  const match = await comparePassword(password, user.password);
  if (!match) throw new Error("Invalid Email or Password");

  const token = generateToken({ id: user.id, role: user.role });

  const { password: _, ...safeUser } = user;

  return { token, user: safeUser };
}; 