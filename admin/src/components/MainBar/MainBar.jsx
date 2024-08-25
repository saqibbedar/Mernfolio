import { useContext } from "react";
import Emails from "../EmailLayout/Emails";
import "./MainBar.css";
import { EmailContext } from "../../Context/EmailContext";
import ViewEmail from "../EmailLayout/ViewEmail";

const MainBar = () => {

  const { selectedEmail } = useContext(EmailContext);

  return (
    <div className="main-bar">
      {
        selectedEmail ? <ViewEmail/> : <Emails/>
      }
    </div>
  );
};

export default MainBar;
