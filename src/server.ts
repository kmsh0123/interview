import app from "./app";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect";
dotenv.config()

const PORT = process.env.PORT || 3000
const startServer = async () => {
    await dbConnect();
    app.listen(PORT,()=>(
    console.log(`server ruuning on port ${PORT}`)
))
}

startServer();