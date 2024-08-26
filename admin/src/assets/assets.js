import { MdEmail, MdDelete, MdContactEmergency } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp, IoHome } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaBlog, FaFolder, FaGraduationCap } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";

const Logo = "Admin Panel";
const BaseURL = "http://localhost:8000/api";

const icons = {
  email: MdEmail,
  hamburger: IoIosMenu,
  close: IoCloseSharp,
  options: SlOptionsVertical,
  remove: MdDelete,
  pdf: BsFileEarmarkPdfFill,
  home: IoHome,
  about: MdContactEmergency,
  blog : FaBlog,
  projects: FaFolder,
  services : RiCustomerServiceFill,
  courses: FaGraduationCap,
  dashboard: BiSolidDashboard,
};

const sideMenuIcons = [icons.dashboard, icons.home, icons.about, icons.blog, icons.projects, icons.services, icons.courses, icons.email];

export { Logo, icons, BaseURL, sideMenuIcons};
