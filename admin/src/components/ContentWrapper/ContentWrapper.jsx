import "./ContentWrapper.css";
import Sidebar from "../Sidebar/Sidebar";
import MainBar from "../MainBar/MainBar";
import EmailProvider from "../../Context/EmailContext";

const ContentWrapper = ({ isSideBarHidden }) => {
  return (
    <EmailProvider>
      <div className="content-wrapper">
        <Sidebar MenuState={isSideBarHidden} />
        <MainBar />
      </div>
    </EmailProvider>
  );
};

export default ContentWrapper;
