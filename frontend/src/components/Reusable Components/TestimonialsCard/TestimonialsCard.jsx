import "./TestimonialsCard.css";
import { icons } from "../../../assets/assets";
import { Link } from "react-router-dom";

const TestimonialsCard = ({img, link, name, designation, des}) => {
  return (
    <div className="testimonial-card">
      <div className="t-card-img">
        <img src={img} alt="" />
      </div>
      <Link to={link} className="t-person-info">
        <h1 className="t-person-name">{name}</h1>
        <div className="person-contact-icon"><icons.linkedIn/></div>
      </Link>
      <div className="t-person-designation">{designation}</div>
      <p className="t-description">{des}</p>
    </div>
  );
};

export default TestimonialsCard;
