import ProjectPageLayout from '../../components/ProjectPage_Layout/ProjectPageLayout'
import CategoryProvider from "../../Context/CategoryContext"
import './Projects.css'

const Projects = () => {
  return (
    <CategoryProvider initialCategory={"All"}>
      <ProjectPageLayout/>
    </CategoryProvider>
  )
}

export default Projects
