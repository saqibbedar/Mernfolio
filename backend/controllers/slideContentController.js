import { slideContentModel } from "../models/models.js";

// add slide content

const addSlideContent = async (req, res) => {

    const { title, description, buttonValue } = req.body;
    
    if (!title || !description || !buttonValue || !req.file) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }
    
    let image_filename = `${req.file.filename}`;

    const content = new slideContentModel({
        title,
        image: image_filename,
        description,
        buttonValue,
    });

    try{
        await content.save();
        res.status(201).json({success: true, message: "Data saved successfully."});
    } catch(e) {
        console.log(e);
        res.status(500).json({success: false, message: "Error while saving the slide data."})
    }

}

export { addSlideContent };