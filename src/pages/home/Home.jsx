import HeroBanner from "./heroBanner/HeroBanner";
import OnTheAir from "./onTheAir/OnTheAir";
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
      <OnTheAir />
      <Popular />
      <Upcoming />
    </div>
  );
}
export default Home;
