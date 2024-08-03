import React, { createContext, useEffect, useState } from 'react';
import {futureProjectsData} from "../assets/assets"

export const ProjectContext = createContext();

const ProjectProvider = ({children}) => {

    const [projectsData, setProjectsData] = useState([]);

    useEffect(()=>{
        setProjectsData(futureProjectsData);
    }, []);

    // Featured Projects for HomePage
    const featuredProjects = projectsData.filter(project =>{
        const projectCategoriesArray = project.category.toLowerCase().split(" ");
        return projectCategoriesArray.includes("featured");
    });

    // free Projects
    const freeProjects = projectsData.filter(project =>{
        const projectCategoriesArray = project.category.toLowerCase().split(" ");
        return projectCategoriesArray.includes("free")
    })

    // Premium Projects
    const premiumProjects = projectsData.filter(project =>{
        const projectCategoriesArray = project.category.toLowerCase().split(" ");
        return projectCategoriesArray.includes("premium")
    })

    const projects = {
        projectsData,
        featuredProjects,
        freeProjects,
        premiumProjects
    }

  return (
    <ProjectContext.Provider value={{projects}}>
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider;
