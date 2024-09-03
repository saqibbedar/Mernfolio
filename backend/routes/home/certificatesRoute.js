import express from "express";
import { addCertificate } from "../../controllers/home/certificatesController.js";
import upload from "../../config/imageStorage.js";

const certificatesRouter = express.Router();

certificatesRouter.post('/add-certificates', upload.single("image"), addCertificate);

export default certificatesRouter;