import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi"; //search icon
import { SlMenu } from "react-icons/sl"; //hamberger icon
import { VscChromeClose } from "react-icons/vsc"; //close icon
import { useNavigate, useLocation } from "react-router-dom"; //use navigate to go to  pages

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [show, setShow] = useState("top"); // creating scrolling effect with this
  const [lastScrollY, setLastScrollY] = useState(0); // creating scrolling effect with this
  const [mobileMenu, setMobileMenu] = useState(false); // hamberger munu
  const [query, setQuery] = useState(""); //for search
  const [showSearch, setShowSearch] = useState(""); //search bar opening/closing with this
  const navigate = useNavigate(); //use navigate to navigate to those pages
  const location = useLocation();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`); //means go to search page . cuz path-> /search/:query (params)
      setTimeout(() => {
        //making search bar disable after one sec after search
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if(type === "movie")
    {
      navigate("/explore/movie")
    }else{
      navigate("/explore/tv");
    }
    setMobileMenu(false)
  }

  return (
    <>
      {/* adding header styling conditionally */}
      <header className={`header ${mobileMenu ? "mobileView " : " "} ${show}`}>
        <ContentWrapper>
          <div className="log">
            <img src={logo} alt="" />
          </div>
          <ul className="menuItems">
            {/* onclick navigate to desired route/page */}
            <li className="menuItem" onClick={() => navigationHandler("movie")}>
              Movies
            </li>
            <li className="menuItem" onClick={() => navigationHandler("tv")}>
              Shows
            </li>
            <li className="menuItem">MyList</li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>

          <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch} />
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )}
          </div>
        </ContentWrapper>
        {showSearch && (
          <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for a movie or show ......"
                  onKeyUp={searchQueryHandler}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <VscChromeClose onClick={() => setShowSearch(false)} />
              </div>
            </ContentWrapper>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
