import BlogPage_Layout from "../../components/BlogPage_Layout/BlogPage_Layout";
import CategoryProvider from "../../Context/CategoryContext";
import GridProvider from "../../Context/GridContext";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <CategoryProvider initialCategory={"All"}>
        <GridProvider>
          <BlogPage_Layout />
        </GridProvider>
      </CategoryProvider>
    </div>
  );
};

export default Blog;
