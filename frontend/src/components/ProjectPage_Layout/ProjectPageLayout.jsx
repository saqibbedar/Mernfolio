import './ProjectPageLayout.css'
import { useContext, useState } from 'react'
import { CategoryContext } from '../../Context/CategoryContext'
import Layout_Info_Template from '../Layout_Info_Template/Layout_Info_Template';
import CategoryButtonTemplate from '../CategoryButtonTemplate/CategoryButtonTemplate';
import { futureProjectsData} from '../../assets/assets';
import { ErrorImages } from '../../assets/assets';
import ErrorPage from "../ErrorPage/ErrorPage"
import Grid from '../GridTemplate/Grid/Grid';
import GridItem from '../GridTemplate/GridItem/GridItem';
import GridToggler from '../GridTemplate/GridToggler/GridToggler'
import { GridContext } from '../../Context/GridContext';

const CategoryButtons = ["All", "Frontend", "HTML", "CSS",  "Tailwind", "Bootstrap", "JavaScript", "React", "NextJS", "Backend", "MERN", "C++", "Python", "NodeJS", "Express", "MongoDB",];

const ProjectPageLayout = () => {

    const [isLoading, setIsLoading] = useState(true);
  
    const {isGrid} = useContext(GridContext);

    const {category} = useContext(CategoryContext);

    const selectedCategory = category.toLowerCase();

    const filteredProjects = futureProjectsData.filter((project) => {
      if(selectedCategory === "all") return true;

      const projectCategoriesArray = project.category.toLowerCase().split(" ");
      return projectCategoriesArray.includes(selectedCategory);
    })

    const ToTitleCase = (str)=>{
      if(!str) return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const sectionTitle = category === "All" ? "All" : `Category: ${category} (${filteredProjects.length})`;

  return (
    <div className='project-page-layout-wrapper'>

      <Layout_Info_Template 
      layoutHeading={"Explore your favorite Projects"}
      layoutDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem rerum blanditiis a officiis incidunt natus illum, velit, porro molestias nulla alias. Amet consequuntur at atque, et odit officiis sunt."}
      />
      <CategoryButtonTemplate Buttons={CategoryButtons} isCenter={false} isLoading={isLoading}/>
      <br/>

      <GridToggler section_name={sectionTitle} isLoading={isLoading}/>

      <div className={filteredProjects.length > 0 ? "": "no-project-found"}>
        {
          filteredProjects.length > 0 ? 
          <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr 1fr"}>
            {
              filteredProjects.map((project, index)=>(
                <GridItem key={index} link={project.project_link} title={project.project_name} img={project.project_img} isLoading={isLoading} setIsLoading={setIsLoading}/>
              )) 
            }
          </Grid>
          : (
            <ErrorPage containerHeight={"100%"} img={ErrorImages.no_result2} imgContainerHeight={"auto"} imgContainerWidth={"auto"} title={`No ${category} Project found`} titleColor={"var(--text-color)"} description={`Sorry, we could'nt find any project related to the ${category} category.`} desColor={"var(--text-color)"} isButton={false} /> 
          )
        }
      </div>
    </div>
  )
}

export default ProjectPageLayout
