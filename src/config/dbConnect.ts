import prisma from "./database"

export const dbConnect = async() => {
   try {
    await prisma.$connect();
    console.log("Database Connected Successfully");
   } catch (error) {
    console.log("Database Connection Fail", error);
    process.exit(1);
   }
}