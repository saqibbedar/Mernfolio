import "./BlogPage_Layout.css";
import { featuredBlogPostsData } from "../../assets/assets";
import Categories from "../Categories/Categories";
import { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import {Link} from "react-router-dom"

const CategoryButtons = [
  "All",
  "Education",
  "Technology",
  "Programming",
  "Projects",
];

const BlogPage_Layout = () => {
  const { category } = useContext(CategoryContext);

  const filteredBlogPosts = featuredBlogPostsData.filter(
    (item) => category === "All" || item.category === category
  );

  return (
    <div className="blog-page-layout-wrapper">
      <div className="blog-page-layout-info">
        <div className="blog-page-layout-heading">
          Explore your favorite blogs
        </div>
        <div className="blog-page-layout-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          rem rerum blanditiis a officiis incidunt natus illum, velit, porro
          molestias nulla alias. Amet consequuntur at atque, et odit officiis
          sunt.
        </div>
      </div>
      <Categories Buttons={CategoryButtons} isCenter={true} />
      <br />
      <div className="section-info">
        <h1>
          {category === "All" ? "All Blogs" : `Category: "${category}"`}
        </h1>
      </div>
      {filteredBlogPosts.map((item, index)=>{
        return <Link to={item.link} key={index} className="blog-container">
        <div className="blog-container-img">
          <img src={item.img} alt="" />
        </div>
        <div className="blog-container-content">
          <div className="blog-container-title">{item.title}</div>
          <div className="blog-container-description">{item.description}</div>
        </div>
        </Link>
       })
      }
    </div>
  );
};

export default BlogPage_Layout;
