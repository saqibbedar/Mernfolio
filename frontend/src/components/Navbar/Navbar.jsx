import "./Navbar.css";
import { brand_name, icons } from "../../assets/assets";
import { useState , useEffect} from "react";
import Search from "../Search/Search";
import { Link, useLocation } from "react-router-dom";


const des_nav = ["Home", "About", "Blog", "Projects", "Services", "Courses", "Contact"];
const mob_nav = ["Home", "About", "Blog", "Projects", "Services", "Courses", "Contact"];

const Navbar = () => {
  const location = useLocation()
  const [menu, setMenu] = useState(location.pathname);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // for handling navbar
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(()=>{
    function handleScroll() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Scrolling down, hide the navbar
      if (currentScroll > lastScrollTop) {
        setIsHidden(true);
      } else {
        // Scrolling up, show the navbar
        setIsHidden(false);
      }

      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
    if (!activeMenu) {
      document.querySelector(".mobile-nav-menu").classList.remove("active-mobile-menu");
      
      document.querySelectorAll(".mb-nav-link").forEach((elem) => {
        elem.addEventListener("click", ()=>{
        setActiveMenu(activeMenu);
        })
      })
    }
  }

  var customClass = "active-search";

  const handleSearch = ()=>{
    setActiveSearch(!activeSearch);
    if(!activeSearch){
      customClass = "";
    }
  }

  return (
    <>
    <div className={` navbar ${isHidden? 'hidden':''}`}>
      <div className="logo">
        <h1 translate="no"><Link to={'/'}>{brand_name.name + "."}</Link></h1>
      </div>

      <nav className="nav-menu" >
      {des_nav.map((item, index)=>{
        const itemPath = `/${item}`;
        const isActive = location.pathname === itemPath || (location.pathname === '/' && itemPath === '/Home');
        return(
              <Link to={itemPath} key={index} onClick={()=>{setMenu(itemPath)}} 
              className={isActive ? "active-nav-des-menu" : "none"}
              style={{color : isActive ? "white":""}}
              >
                {item}
              </Link>
            )
          })}
          <div className="search search-large-screen" onClick={handleSearch}><icons.search/></div>
      </nav>

      <div className="icons">
        <div className="hamburger" onClick={handleMenu}><icons.hamburger />
        </div>
          {/* <div className="active-dark-mode" onClick={activeDarkMode}>{isDarkMode ? <CiLight /> : <CiDark />}</div> */}
      </div>
    </div>

        <nav className={`mobile-nav-menu ${activeMenu? "active-mobile-menu": ""} ${isHidden? 'hidden': ''}`}>
          <div className="search-bar-small-screens">
        <div className="search search-small-screens" onClick={handleSearch}><icons.search/> <span>Search</span></div>

          </div>
          
        {mob_nav.map((item, index)=>{
          return(
              <Link to={`/${item}`} key={index} id={item === "Home"? "mob-home": null} className={`mb-nav-link`} >{item }</Link>
          )
        })}
        <div className="close-nav" onClick={handleMenu}><icons.close title="close"/></div>
        </nav>

        <Search customClass={activeSearch ? customClass : ""} handleSearch={handleSearch}/>

    </>

  );
};

export default Navbar;