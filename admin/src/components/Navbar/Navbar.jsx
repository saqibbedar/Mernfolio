import { Link } from "react-router-dom";
import { icons, Logo } from "../../assets/assets";
import './Navbar.css';

const Navbar = ({ isSideBarHidden , setIsSideBarHidden}) => {

  return (
    <>
      <div className="navbar">
        <div className="logo-area">
          { <icons.hamburger onClick={()=> setIsSideBarHidden(!isSideBarHidden)}/>}
          <Link to={'/'}>{Logo}</Link>
        </div>
        <div className="img-overlay">
          <img
            className=""
            src={
              "https://th.bing.com/th/id/R.50e2dcfd03313a5fc9d76c38aef985ec?rik=QqZRh%2bgCI%2buZSg&pid=ImgRaw&r=0"
            }
            />
        </div>
      </div>
    </>
  );
};

export default Navbar;
