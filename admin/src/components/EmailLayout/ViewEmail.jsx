import React, { useContext, useState } from "react";
import { EmailContext } from "../../Context/EmailContext";
import {Link} from "react-router-dom"
import './ViewEmail.css'
import { icons } from "../../assets/assets";

const ViewEmail = () => {
  const { selectedEmail, removeSelectedEmail, removeEmail } = useContext(EmailContext);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptions = ()=>{
    setShowOptions(!showOptions);
  }

  const handleEmailDelete = (id) => {
    removeEmail(id);
    removeSelectedEmail();
  }

  return (
    <div className="view-email-box">
      <div className="view-email-header">
        <div className="email-area">
            <div className="view-email-client-name">{selectedEmail.name}</div>
            <Link to={`mailto:${selectedEmail.email}`} className="client-email">{`<${selectedEmail.email}>`}</Link>
        </div>
        <div className="view-email-utility">
            <div className="timestamps">{`${new Date(selectedEmail.createdAt).toLocaleString()}`}</div>
            <div className="show-option-btn" onClick={handleOptions}>{<icons.options/>}</div>
        </div>
      </div>
      <div className="view-email-client-msg"><span style={{color: "black",fontWeight: "600", fontSize: "1.4rem", letterSpacing: ".8px"}}>Message</span>{`: ${selectedEmail.message}`}</div>

      <div className={`view-email-options ${showOptions ? "" : "hide"}`}>
        <span onClick={()=> handleEmailDelete(selectedEmail._id)}><icons.remove/>delete email</span>
        <span ><icons.pdf/>save as pdf</span>
      </div>

      <div className="close-email" title="close" onClick={removeSelectedEmail}><icons.close/></div>
    </div>
  );
};

export default ViewEmail;
