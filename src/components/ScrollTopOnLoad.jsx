import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopOnLoad = () => {
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]); // Triggered on route change

  return null; // This component doesn't render anything
};

export default ScrollTopOnLoad;
