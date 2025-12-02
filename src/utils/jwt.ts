import jwt from "jsonwebtoken";

export const generateToken = (payload : object) => {
    return jwt.sign(payload,process.env.JWT_KEY!,{
        expiresIn : "7d"
    })
}