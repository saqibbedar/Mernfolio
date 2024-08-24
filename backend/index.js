import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// app config
const app = express();

// dotenv config
dotenv.config();

// PORT Setup
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

// Database connection

app.get("/", (req, res)=>{
    res.send("Server is working...");
});

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
