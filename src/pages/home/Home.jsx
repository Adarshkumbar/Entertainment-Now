import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeroBanner from "./heroBanner/HeroBanner";
import OnTheAir from "./onTheAir/OnTheAir";
import Popular from "./popular/Popular";
import "./style.scss";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
import Upcoming from "./upcoming/Upcoming";

function Home() {
  return (
    <>
      <Header />
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <TopRated />
        <OnTheAir />
        <Popular />
        <Upcoming />
      </div>
      <Footer />
    </>
  );
}
export default Home;
