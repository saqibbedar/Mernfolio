import { MdEmail, MdDelete } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Logo = "Admin Panel";
const BaseURL = "http://localhost:8000/api";

const icons = {
    email : MdEmail,
    hamburger : IoIosMenu,
    close : IoCloseSharp,
    options : SlOptionsVertical,
    remove : MdDelete,
    pdf : BsFileEarmarkPdfFill,
}

export { Logo, icons, BaseURL };