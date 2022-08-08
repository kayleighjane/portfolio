import useBreadcrumbs from 'use-react-router-breadcrumbs';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';

const Breadcrumbs = ({isScrolledDown}) => {
const breadcrumbs = useBreadcrumbs();
console.log(breadcrumbs)




const breadcrumbDivider = false;
const n = 1;

const newBreadcrumbs = breadcrumbs.reduce((list, elem, i) => {
  list.push(elem);
  if((i+1) % n === 0) list.push(breadcrumbDivider);
  return list;
}, []);

const location = useLocation();

let breadcrumbArray = newBreadcrumbs.slice(0, -1);



return (
  <div className={`basis-full text-custom-light font-light text-sm md:text-base tracking-wide flex flex gap-x-2 ${isScrolledDown ? 'fixed bg-custom-dark pt-4 pb-4' : 'pt-8 p-2 '}`}>
    
    <ul className="flex gap-x-2">
      {breadcrumbArray.map((item, key) => (
      <li key={key}>
      {!item?.breadcrumb ? (<span className="rounded-lg bg-custom-light px-2"></span>) : (<span className="rounded-xl py-1 px-2.5 border-2 border-custom-light">
        {location.pathname === item.match?.pathname ? item?.breadcrumb
      : (
        <a href={item.match?.pathname}>
      {item?.breadcrumb}
      </a>)
      }
      </span>)}
      
      </li>
      
      
      )
      )
      }
    </ul>
  </div>
)
}

export default Breadcrumbs;
