import "./AboutProjectSection.css";
import Grid from "../../GridTemplate/Grid/Grid";
import GridToggler from "../../GridTemplate/GridToggler/GridToggler";
import { GridContext } from "../../../Context/GridContext";
import { useContext } from "react";

const AboutProjectSection = () => {
  const { isGrid } = useContext(GridContext);
  return (
      <div className="about-sec-project-wrapper">
        <GridToggler section_name={"Projects"} />
        <Grid isGrid={isGrid} />
      </div>
  );
};

export default AboutProjectSection;
