import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import "./style.scss";
import Trending from "./trending/Trending";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
  
}
export default Home;
