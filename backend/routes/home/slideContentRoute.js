import express from "express";
import upload from "../../config/imageStorage.js";
import { addSlideContent } from '../../controllers/home/slideContentController.js';

const slideContentRouter = express.Router();

slideContentRouter.post("/add-slide", upload.single("image"), addSlideContent);

export default slideContentRouter;