import multer from "multer";
import { formatDateTime } from "easy-datetime-fmt";

const storage = multer.diskStorage({
    destination : 'uploads',
    filename : (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage});

export default upload;