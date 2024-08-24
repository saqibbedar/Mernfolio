import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectToDatabase } from "./config/db.js";

// app config
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// dotenv config
dotenv.config();

// PORT Setup
const PORT = process.env.PORT || 5000;

// Database connection
ConnectToDatabase(`${process.env.MONGODB_URL}/Mernfolio`);

app.get("/", (req, res)=>{
    res.send("Server is working...");
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
