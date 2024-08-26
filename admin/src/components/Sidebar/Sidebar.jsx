import './Sidebar.css'
import { sideMenuIcons } from '../../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react';

const sideMenu = ["dashboard","home", "about", "blog", "projects", "services", "courses", "emails"];

const Sidebar = ({MenuState}) => {

  const location = useLocation();

  const toTitleCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
        <div className='sidebar' style={{display : MenuState && "none"}}>
          {
            sideMenu.map((menu, index)=>{
              const itemPath = `/${menu}`;
              const isActive = location.pathname === itemPath || (location.pathname === '/' && itemPath === '/dashboard');
               return <Link to={menu} key={index}>
                  <button className={isActive? 'active' : ""}>{React.createElement(sideMenuIcons[index])}<span>{toTitleCase(menu)}</span></button>
                </Link>
              })
          }
        </div>
    </>
  )
}

export default Sidebar
