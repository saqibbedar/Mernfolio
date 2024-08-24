import express from "express";
import { sendEmail } from "../controllers/contactController.js";

// contact router
const contactRouter = express.Router();

contactRouter.post("/contact", sendEmail);

export default contactRouter;