import "./AboutLandingPage.css";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";
import { useState } from "react";
import {icons} from "../../../assets/assets"

const AboutLandingPage = ({ title, description, cv_url, img }) => {

  const [isImgActive, setImgActive]= useState(false);

  return (
    <div className="about-section-landing-page">
      <div className="about-left">
        <h1>Hi, I am  {title || "Hello, world"}</h1>
        <p>
          {description ||
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aliquam ducimus animi necessitatibus vel, dolorum nam cupiditate, sed ad corrupti a aliquid reiciendis commodi ipsam quam ut saepe dignissimos? Modi?"}
        </p>
        <HeroBtn btnValue={"Download CV"} btnLink={cv_url} btnBg={"var(--featured-bg)"} hoverColor={"#323336"} isDownloadBtn={true}/>
      </div>
      <div className="about-right ">
        <div className={isImgActive ? "active": "about-img-container"}>
          <img src={img} onClick={()=>setImgActive(true)}  alt="" />
            <div style={{display: isImgActive ? "grid" : "none"}} className="close-img" onClick={()=>setImgActive(false)}>{<icons.close/>}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutLandingPage;
