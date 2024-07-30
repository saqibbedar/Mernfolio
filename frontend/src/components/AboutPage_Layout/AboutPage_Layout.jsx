import { useContext } from "react"
import { about_data_1, educational_data  } from "../../assets/assets"
import { CategoryContext } from "../../Context/CategoryContext"
import AboutLandingPage from "./AboutLandingPage/AboutLandingPage"
import "./AboutPage_Layout.css"
import Categories from "../Categories/Categories"
import AboutEducationSection from "./AboutEducationSection/AboutEducationSection"
import AboutSkillSection from "./AboutSkillSection/AboutSkillPage"
import AboutProjectSection from "./AboutProjectsSection/AboutProjectSection"

const CategoryButtons = ["Education", "Skills", "Projects"];

const AboutPage_Layout = () => {

  const {category} = useContext(CategoryContext)

  return (
    <div className="about-section-main-wrapper">
     <AboutLandingPage title={about_data_1.title} description={about_data_1.description} img={about_data_1.authorImg}/>
     <Categories Buttons={CategoryButtons}/>
     <div>
        {category === CategoryButtons[0] && <AboutEducationSection educational_data={educational_data} />}
        {category === CategoryButtons[1] && <AboutSkillSection/> }
        {category === CategoryButtons[2] && <AboutProjectSection/>}
      </div>
    </div>
  )
}

export default AboutPage_Layout
