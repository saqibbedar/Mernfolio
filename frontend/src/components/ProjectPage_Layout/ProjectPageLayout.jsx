import './ProjectPageLayout.css'
import { useContext } from 'react'
import { CategoryContext } from '../../Context/CategoryContext'
import Layout_Info_Template from '../Layout_Info_Template/Layout_Info_Template';
import CategoryButtonTemplate from '../CategoryButtonTemplate/CategoryButtonTemplate';

const CategoryButtons = ["All", "Frontend", "Backend", "Full Stack", "HTML", "CSS", "JAVASCRIPT", "REACT", "MERN", "C++"];

const ProjectPageLayout = () => {

    const {category} = useContext(CategoryContext);

  return (
    <div className='project-page-layout-wrapper'>
      <Layout_Info_Template 
      layoutHeading={"Explore your favorite Projects"}
      layoutDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."}
      />
      <CategoryButtonTemplate Buttons={CategoryButtons} isCenter={true}/>
      <br/>
      <div className="section-info">
        <h1>{category === "All" ? "All" : `Category: "${category}"`}</h1>
      </div>
    </div>
  )
}

export default ProjectPageLayout
