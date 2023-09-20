import React, { useState, useEffect } from "react";
import "./Header.scss"; 

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false); 

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={require("../assets/images/logo.svg")} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href="/">Home</a>
        <a href="/">Articles</a>
        <a href="/">About</a>
        <button>Logout</button>
      </nav>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
