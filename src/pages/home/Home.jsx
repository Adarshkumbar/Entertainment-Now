import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";
import Trending from "./trending/Trending";
function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
  
}
export default Home;
