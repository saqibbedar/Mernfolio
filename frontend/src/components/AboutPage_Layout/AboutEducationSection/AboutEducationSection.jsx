import { Link } from "react-router-dom";
import "./AboutEducationSection.css";

const AboutEducationSection = ({ educational_data }) => {
  return (
    <div className="about-sec-edu-wrapper">
      <div className="section-info">
        <h1>Education</h1>
      </div>
      <div className="edu-box">
        {educational_data.map((edu, index) => (
          <div key={index} className="edu-content-wrapper">
            <div className="edu-main-title">
              <h3 className="edu-year">{edu.year}</h3>
              <p>{edu.degreeType}</p>
            </div>
            <div className="edu-description">
              {
                edu.description
              }
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutEducationSection;
