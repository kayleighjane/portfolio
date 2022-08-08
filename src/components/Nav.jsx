import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({isScrolledDown}) => (
<>
  <nav className={`flex flex-wrap ${isScrolledDown ? 'fixed opacity-30' : ''}`} style={{maxWidth:"150px",right:"50px"}}>
      <ul className="flex flex-wrap gap-y-2 customsm:max-w-xs md:gap-y-4 text-3xl md:text-4xl font-extralight text-custom-accent tracking-wide">
        <li className="basis-1/2 flex"><a href="/about">About</a></li>
        <li className="basis-1/2 flex justify-end"><a href="/projects">Projects</a></li>
        <li className="basis-1/2 flex"><a href="/work">Work</a></li>
        <li className="basis-1/2 flex justify-end"><Link to="/contact">Contact</Link></li>
      </ul>
  
  </nav>
</>
);

export default Nav;
