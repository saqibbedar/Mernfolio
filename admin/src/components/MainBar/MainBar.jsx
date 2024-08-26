import Emails from "../EmailLayout/Emails";
import ViewEmail from "../EmailLayout/ViewEmail"
import "./MainBar.css";
import NotFound from "../NotFound/NotFound"
import { Route, Routes } from "react-router-dom";
import { Dashboard, Home } from "../pages/pages.js";
import { useContext } from "react";
import { EmailContext } from "../../Context/EmailContext.jsx";

const MainBar = () => {

  const {selectedEmail}= useContext(EmailContext);

  return (
    <div className="main-bar">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/emails" element={<Emails/>}/>
        <Route path="/emails/:id" element={<ViewEmail selectedEmail={selectedEmail}/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default MainBar;
