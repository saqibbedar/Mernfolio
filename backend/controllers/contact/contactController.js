import { contactModel }from "../../models/models.js";

// Send Email

const sendEmail = async (req, res) => {

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

// email list

const getEmails = async (req, res) => {
  try {
    const emails = await contactModel.find({}).sort({createdAt: -1});
    res.json({ success: true, emails });
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: "Error while retrieving emails." });
  }
};

// Remove Email

const removeEmail = async (req, res) => {
  try {
    const result = await contactModel.findOneAndDelete({ _id: req.params.id });

    if (result) {
      res.json({ success: true, message: "Email deleted." });
    } else {
      res.json({ success: false, message: "Email not found." });
    }
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: "Error while deleting email." });
  }
};

export { sendEmail, getEmails, removeEmail };
