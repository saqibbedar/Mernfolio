import './ErrorPage.css'
import HeroBtn from "../Reusable Components/HeroBtn/HeroBtn"

const ErrorPage = ({img, title, titleColor, description, isButton, btnValue, btnLink, btnBg, hoverColor}) => {


  const error404Styles = {
    color: "var(--text-color)",
    fontWeight: "400",
    fontSize: "14px"
  };

  return (
    <div className='Error-page'>
      <div className="error-page-img-container" style={{display : img ? "" : "none"}}>
        <img src={img} />
      </div>
      <div className="error-box">
        <h1 style={{color: titleColor && titleColor}}>{title}</h1>
        <p style={title === "Page not found" || title === "Courses are coming soon!" ? {...error404Styles, fontSize: img ? "" : "17px"}: {fontSize : img ? "" : "17px",  }}>{description}</p>
      </div>
      <div className="error-page-btn" style={{display : isButton ? "" : "none"}}>
        <HeroBtn btnValue={btnValue} btnLink={btnLink} btnBg={btnBg} hoverColor={hoverColor}/>
      </div>
    </div>
  )
}

export default ErrorPage
