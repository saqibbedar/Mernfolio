import "./BlogPage_Layout.css";
import { featuredBlogPostsData } from "../../assets/assets";
import GridToggler from "../GridTemplate/GridToggler/GridToggler";

const BlogPage_Layout = () => {
  return (
    <div className="blog-page-layout-wrapper">
        <div className="blog-page-layout-info">
            <div className="blog-page-layout-heading">Explore your favorite</div>
            <div className="blog-page-layout-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt.</div>
        </div>
      <GridToggler section_name={"Blog Posts"} />
      {featuredBlogPostsData.map((data, index) => (
        <div key={index}>{data.title}</div>
      ))}
    </div>
  );
};

export default BlogPage_Layout;
