import HeroBanner from "./heroBanner/HeroBanner";
import Popular from "./popular/Popular";
import "./style.scss";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
import Upcoming from "./upcoming/Upcoming";

function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <TopRated />
      <Upcoming />
      <Popular />
    </div>
  );
}
export default Home;
