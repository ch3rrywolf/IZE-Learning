import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbUrl:string = process.env.DB_URL || "";

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any) => {
            console.log(`MongoDB connected: ${data.connection.host}`);
    })
} catch (error:any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
}
}

export default connectDB;