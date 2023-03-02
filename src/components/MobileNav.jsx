import React from 'react';
import { linkData } from "../data/data";
import { Link, useLocation } from 'react-router-dom';

const MobileNav = ({  isActive }) => {
  const location = useLocation();
  let currentPage = location.pathname.split('/').splice(-1).toString();
  
  return ( 
 <ul className={`pt-4 ${isActive ? '' : 'hidden'}`}>
    {linkData.map((link, key) => (
      currentPage != link 
      ? (<li key={key}>
      <Link to={`/${link}`}>{link}</Link>
      </li>
      )
      :
      ('')
    ))}
      
  </ul>
    
)};

export default MobileNav;