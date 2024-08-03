import "./FeaturedProjects.css";
import React, { useContext, useState } from "react";
import { GridContext } from "../../../Context/GridContext";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import Grid from "../../GridTemplate/Grid/Grid";
import GridItem from "../../GridTemplate/GridItem/GridItem";
import { ProjectContext } from "../../../Context/ProjectContext";

const FeaturedProjects = () => {
  
  const {isGrid} = useContext(GridContext);
  
  const {projects} = useContext(ProjectContext);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="f-projects-wrapper">

      <GridToggler section_name={"Featured projects"} isLoading={isLoading}/>
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr"}>
        {
          projects.featuredProjects.slice(0, 2).map((project, index)=>(
            <GridItem key={index} link={project.project_link} title={project.project_name} img={project.project_img} isLoading={isLoading} setIsLoading={setIsLoading}/>
          ))
        }
      </Grid>

      <div className="hero-btn-wrapper">
        <HeroBtn
          btnValue={"View all projects"}
          btnLink={'/Projects'}
          btnBg={"var(--featured-bg)"}
          hoverColor={"#323336"}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
