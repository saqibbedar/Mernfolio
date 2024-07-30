import "./FeaturedBlogPosts.css";
import { featuredBlogPostsData } from "../../../assets/assets.js";
import FeaturedBlogPostCard from "../../Reusable Components/FeaturedBlogPostCard/FeaturedBlogPostCard";
import { Link } from "react-router-dom";
Link


const FeaturedBlogPosts = () => {
  const size = featuredBlogPostsData.length
  console.log(size); 
  return (
    <> 
      <div className="f-post-wrapper">
        {featuredBlogPostsData.map((item, index) => {
          if(index === size-1) {
            return <div className="f-post-btn"><Link to={"/Blog"} className="f-post-view-more-btn">VIEW <br/>MORE</Link></div>
          } else{
            return <FeaturedBlogPostCard key={index} link={item.link} description={item.description} img={item.img} title={item.title} />
          }
        }
        )}
      </div>
    </>
  );
};

export default FeaturedBlogPosts;
