import mongoose from "mongoose";

const certificatesSchema = mongoose.Schema({
    image : {type : String, required: true},
    title : {type : String, required: true},
    description : {type : String, required: true},
    credential_url : {type : String, required: true},
    organization_name : {type : String, required: true},
    organization_logo : {type : String},
});

const certificatesModel = mongoose.models.certificates || mongoose.model("certificates", certificatesSchema);

export default certificatesModel;