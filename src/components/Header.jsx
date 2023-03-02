import React from 'react';
import Socials from './Socials';
import Breadcrumbs from './Breadcrumbs';
import { useLocation } from 'react-router-dom';

const Header = ({isScrolledDown, isDesktop}) =>  
{
  const location = useLocation();
  return (<header className={`flex flex-wrap ${isScrolledDown ? 'h-header' : ''}`}>
      
    <h1 className={`text-xs md:text-sm basis-1/2 text-custom-sub uppercase ${isScrolledDown ? 'opacity-30' : ''}`}><sup>Kayleigh Regan's Portfolio v.1.0</sup></h1>
    <Socials />
    {location.pathname !== '/' && (<Breadcrumbs isDesktop={isDesktop} isScrolledDown={isScrolledDown} />)}
  </header>)}

export default Header;
