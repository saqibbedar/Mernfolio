import "./FeaturedProjects.css";
import React, { useContext } from "react";
import { GridContext } from "../../../Context/GridContext";
import { futureProjectsData } from "../../../assets/assets";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import Grid from "../../GridTemplate/Grid/Grid";
import GridItem from "../../GridTemplate/GridItem/GridItem";

const FeaturedProjects = () => {
  
  const {isGrid} = useContext(GridContext);

  const filteredProjects = futureProjectsData.filter(project => {
    const projectCategoriesArray = project.category.toLowerCase().split(" ");
    return projectCategoriesArray.includes("featured")
  });

  return (
    <div className="f-projects-wrapper">

      <GridToggler section_name={"Featured projects"}/>
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr"}>
        {
          filteredProjects.slice(0, 2).map((project, index)=>(
            <GridItem key={index} link={project.project_link} title={project.project_name} img={project.project_img}/>
          ))
        }
      </Grid>

      <div className="hero-btn-wrapper">
        <HeroBtn
          btnValue={"View all projects"}
          btnLink={'/Projects'}
          btnBg={"var(--featured-bg)"}
          hoverColor={"#323336"}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
