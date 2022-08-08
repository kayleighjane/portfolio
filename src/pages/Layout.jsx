import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'
import useWindowSize from '../hooks/useWindowSize'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav'

const Layout = () => {
  const { width } = useWindowSize();
  const desktop = width >= 838;
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolledDown(true);
      }
        else {
          setIsScrolledDown(false);
        }
      }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolledDown]);
  console.log(isScrolledDown)

  return (
  <div className="layout bg-custom-dark text-custom-light flex flex-nowrap justify-between flex-col p-4 lg:p-6">
    <Header isScrolledDown={isScrolledDown} />
    <main className="flex flex-col flex-1 justify-around p-2 customxs:p-4 sm:max-w-1xl">
      <Outlet />
    </main>
    {desktop && (
      <aside className={`top-0 right-0 z-10 h-full max-w-xxs flex items-center p-2 h-screen ${isScrolledDown ? 'absolute' : 'absolute'}`}>
        <Nav isScrolledDown={isScrolledDown} />
      </aside>
    )
    }
    <Footer />
  </div>
  )
}

export default Layout;
