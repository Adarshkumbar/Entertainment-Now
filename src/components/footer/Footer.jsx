import React from "react";
import { FaGithub, FaTwitter, FaLinkedin,FaDiscord } from "react-icons/fa";

import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms & Conditions </li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          {/* <li className="menuItem">Blog</li> */}
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          The title and talent pages of IMDb are accessible to all users, but
          only registered and logged-in users can submit new material and
          suggest edits to existing entries.<br></br>
          Thank you TMDB
        </div>
        <div className="socialIcons">
          <a href="https://github.com/Adarshkumbar" target="__blank">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <Link to={"https://www.linkedin.com/in/adarshkumbar/"} target="__blank">
            <span className="icon" >
              <FaLinkedin />
            </span>
          </Link>
          <span className="icon">
            <FaTwitter />
          </span>
          <a href="https://discord.gg/wAw3Wg2JwF" target="__blank">
            <span className="icon">
              <FaDiscord />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
