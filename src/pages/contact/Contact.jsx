import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import Footer from "../../components/footer/Footer";
import "./contacts.scss"
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
              Click icons to Contact <br></br>👇
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
export default Contacts