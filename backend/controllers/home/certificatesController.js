import { certificatesModel } from "../../models/models.js";

// add certificates

const addCertificate = async (req, res) => {
  const {
    title,
    description,
    credential_url,
    organization_name,
    organization_logo,
  } = req.body;

  if (
    !title ||
    !description ||
    !credential_url ||
    !organization_name ||
    !req.file
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  let image_filename = `${req.file.filename}`;

  const content = new certificatesModel({
    image: image_filename,
    title,
    description,
    credential_url,
    organization_name,
    organization_logo,
  });

  try {
    await content.save();
    res
      .status(200)
      .json({ success: true, message: "Certificate added successfully!" });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "Error while saving certificate." });
  }
};

export { addCertificate };
