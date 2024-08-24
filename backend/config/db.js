import mongoose from "mongoose";

export const ConnectToDatabase = async (mongoDB_URL) => {
    await mongoose.connect(mongoDB_URL).then(()=>console.log("Connected to the database"));
}