import './ProjectPageLayout.css'
import { useContext } from 'react'
import { CategoryContext } from '../../Context/CategoryContext'
import Layout_Info_Template from '../Layout_Info_Template/Layout_Info_Template';
import CategoryButtonTemplate from '../CategoryButtonTemplate/CategoryButtonTemplate';
import { futureProjectsData, ErrorImages } from '../../assets/assets';
import {Link} from "react-router-dom";
import ErrorPage from '../ErrorPage/ErrorPage';

const CategoryButtons = ["All", "FRONTEND", "HTML", "CSS",  "TAILWIND", "BOOTSTRAP", "JAVASCRIPT", "REACT", "NEXTJS", "BACKEND", "MERN", "C++", "PYTHON", "NODEJS", "EXPRESS", "MONGODB",];

const ProjectPageLayout = () => {

    const {category} = useContext(CategoryContext);

    const selectedCategory = category.toLowerCase();

    const filteredProjects = futureProjectsData.filter((project) => {
      if(category === "All") return true;

      const projectCategoriesArray = project.category.toLowerCase().split(" ");
      return projectCategoriesArray.includes(selectedCategory);
    })

  return (
    <div className='project-page-layout-wrapper'>

      <Layout_Info_Template 
      layoutHeading={"Explore your favorite Projects"}
      layoutDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."}
      />
      <CategoryButtonTemplate Buttons={CategoryButtons} isCenter={false}/>
      <br/>
      <div className="section-info">
        <h1>{category === "All" ? "All" : `Category: "${category}"`}</h1>
      </div>
      <div className={filteredProjects.length > 0 ? "grid": "flex"}>
        {
          filteredProjects.length > 0 ? 
          filteredProjects.map((project, index)=>(
            <Link to={project.project_link} className='grid-item' key={index}>
              <div className="grid-item-title">• {project.project_name}</div>
              <div className="grid-item-container">
                <img src={project.project_img} alt="" />
              </div>
            </Link>
          )) : (
            <div>
              <h2>{`No ${category} Project found`}</h2>
              <div>{`Sorry, we could'nt find any project related to the ${category} category.`}</div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ProjectPageLayout
