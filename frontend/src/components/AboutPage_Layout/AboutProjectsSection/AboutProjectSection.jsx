import "./AboutProjectSection.css";
import Grid from "../../GridTemplate/Grid/Grid";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import { GridContext } from "../../../Context/GridContext";
import { useContext } from "react";
import GridItem from "../../GridTemplate/GridItem/GridItem";
import { futureProjectsData } from "../../../assets/assets";
import HeroBtn from "../../Reusable Components/HeroBtn/HeroBtn";

const AboutProjectSection = () => {
  const { isGrid } = useContext(GridContext);
  return (
      <div className="about-sec-project-wrapper">
        <GridToggler section_name={"Top Projects"} />
        <Grid isGrid={isGrid} gridTempCol={"1fr 1fr 1fr"}>
          {
            futureProjectsData.map((project, index)=>(
             <GridItem key={index} link={project.project_link} title={project.project_name} img={project.project_img} />
            ))
          }
        </Grid>
        <div className="about-sec-btn-wrapper">
            <HeroBtn btnValue={"View All projects"} btnLink={"/Projects"} isDownloadBtn={false}/>
        </div>
      </div>
  );
};

export default AboutProjectSection;
