import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; 

const NavbarWithScroll = () => {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [location]);
  
    return <Navbar />;
  };

export default NavbarWithScroll;