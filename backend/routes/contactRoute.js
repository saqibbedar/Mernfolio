import express from "express";
import { sendEmail, getEmails, removeEmail } from "../controllers/contactController.js";

// contact router
const contactRouter = express.Router();

contactRouter.post("/contact", sendEmail);
contactRouter.get("/emails", getEmails);
contactRouter.delete("/emails/:id", removeEmail);

export default contactRouter;