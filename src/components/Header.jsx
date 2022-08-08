import React from 'react';
import Socials from './Socials';
import Breadcrumbs from './Breadcrumbs';
import { useLocation } from 'react-router-dom';

const Header = ({isScrolledDown}) =>  
{
  const location = useLocation();
  return (<header className="flex flex-wrap">
      
    <h1 className={`text-xs md:text-sm basis-1/2 text-custom-sub ${isScrolledDown ? 'opacity-30' : ''}`}>Kayleigh Regan's Portfolio v.1</h1>
    <Socials />
    {location.pathname !== '/' && (<Breadcrumbs isScrolledDown={isScrolledDown} />)}
  </header>)}

export default Header;
