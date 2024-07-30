import "./FeaturedProjects.css";
import React, { useContext } from "react";
import { GridContext } from "../../../Context/GridContext";
import { futureProjectsData } from "../../../assets/assets";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";
// import Projects from "../../Reusable Components/Projects/Projects";
// import ProjectsComponentWrapper from "../../Reusable Components/ProjectsComponentWrapper/ProjectsComponentWrapper";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import Grid from "../../GridTemplate/Grid/Grid";

const FeaturedProjects = () => {
  
  const {isGrid} = useContext(GridContext);

  return (
    <div className="f-projects-wrapper">
      {/* <div className="f-project-info">
        <h1>Featured projects</h1>
        <div className="f-project-info-navigation-btns">
          <button
            onClick={() => setIsGrid(!isGrid)}
            title={isGrid ? "Landscape mode" : "Grid mode"}
          >
            {isGrid ? <icons.filledGrid /> : <icons.unFilledGrid />}
          </button>
        </div>
      </div> */}

      <GridToggler section_name={"Featured projects"}/>
      <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}/>

      {/* <ProjectsComponentWrapper State={isGrid}>
      {futureProjectsData.map((project, index) => (
         <Projects
          key={index}
          url={project.project_link}
          title={project.project_name}
          img={project.img}
          Index={index}
        />
      ))}
      </ProjectsComponentWrapper> */}

      <div className="hero-btn-wrapper">
        <HeroBtn
          btnValue={"View all projects"}
          btnLink={'/Projects'}
          btnBg={"#202124"}
          hoverColor={"#323336"}
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
