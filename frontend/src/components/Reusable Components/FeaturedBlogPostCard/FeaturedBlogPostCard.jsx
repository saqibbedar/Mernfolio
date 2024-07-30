import { Link } from "react-router-dom";
import './FeaturedBlogPostCard.css'

const FeaturedBlogPostCard = ({ link, description, img, title, containerWidth }) => {
  return (
    <>
        <Link to={link} className="f-post-sm-card">
            <div className="f-post-sm-card-content" style={{width : containerWidth && containerWidth}}>
                <div className="f-post-left-section">
                <p>{description}</p>
                </div>
                <div className="f-post-right-section">
                <img src={img} />
                </div>
            </div>
            <h3>{title}</h3>
        </Link>
    </>
  );
};

export default FeaturedBlogPostCard;
