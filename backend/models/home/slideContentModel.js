import mongoose from 'mongoose';

const slideContentSchema = new mongoose.Schema({
    title : {type: String, required: true},
    image : {type: String, required: true},
    description : {type: String, required: true},
    buttonValue: {type: String, required: true},
});

const slideContentModel = mongoose.model.slideContent || mongoose.model("slideContent", slideContentSchema);

export default slideContentModel;