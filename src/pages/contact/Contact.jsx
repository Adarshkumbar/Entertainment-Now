import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import "./contacts.scss"
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

import { Link } from "react-router-dom";

import Typewriter from "typewriter-effect";
const Contacts = () => {
  return (
    <>
      <ContentWrapper>
        <div className="contact">
          <div className="title text-gradient">
            <Typewriter
              options={{
                strings: ["HELLO 👋, I AM", " ADARSH KUMBAR "],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                pauseFor: 30,
              }}
            />
            {/* style={{ fontSize: "30px", margin: "100px 0px" }} */}
            <div className="info_1">
              Click icons to Contact <br />
              <br />
              👇
            </div>
          </div>
        </div>
        {/* icons code */}
        <div className="footery">
          <ContentWrapper>
            <div className="socialIcons">
              <a
                href="https://github.com/Adarshkumbar"
                target="__blank"
                style={{ color: "#FFF" }}
              >
                <span className="icon">
                  <FaGithub />
                </span>
              </a>
              <Link
                to={"https://www.linkedin.com/in/adarshkumbar/"}
                target="__blank"
                style={{ color: "#FFF" }}
              >
                <span className="icon">
                  <FaLinkedin />
                </span>
              </Link>
              <span className="icon">
                <FaTwitter />
              </span>
              <a
                href="https://discord.gg/wAw3Wg2JwF"
                target="__blank"
                style={{ color: "#FFF" }}
              >
                <span className="icon">
                  <FaDiscord />
                </span>
              </a>
            </div>
          </ContentWrapper>
        </div>
      </ContentWrapper>
    </>
  );
}
export default Contacts




      
    // 
  


   






