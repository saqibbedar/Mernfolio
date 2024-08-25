import { MdEmail, MdDelete } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Logo = "Admin Panel";
const BaseURL = "http://localhost:8000/api";

const icons = {
  email: MdEmail,
  hamburger: IoIosMenu,
  close: IoCloseSharp,
  options: SlOptionsVertical,
  remove: MdDelete,
  pdf: BsFileEarmarkPdfFill,
};

export function formatDateTime(date) {
    
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time, and handle "0" as "12".

  return `${month} ${day}, ${year}, ${hours}:${minutes} ${ampm}`;
}

export function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month} ${day}, ${year}`;
}

export function formatTime(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  
    return `${hours}:${minutes} ${ampm}`;
}

export { Logo, icons, BaseURL, formatDateTime, formatDate, formatTime };
