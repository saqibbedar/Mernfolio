import contactModel from "../models/contactModel.js";

// Send Email

const sendEmail = async (req, res) => {
    console.log(req.body);
    
  const mail = new contactModel({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    await mail.save();
    res.json({ success: true, message: "Email Sent." });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: "Error while sending email." });
  }
};

export { sendEmail };
