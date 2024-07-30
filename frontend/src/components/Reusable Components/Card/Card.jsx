import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({img, title, description, profileImg, name, url}) => {


  return (
    <>
            <div className="card">
              <div className="main-card-img">
                <img src={img} className="img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
              </div>
              <div className="card-footer">
                <div className="card-author-img">
                  <img src={profileImg} alt="" />
                </div>
                <div className="author-info">
                  <h5>{name}</h5>
                  <h6><Link to={url} target="_blank">See Credential</Link></h6>
                </div>
              </div>
            </div>
    </>
  );
};

export default Card;
