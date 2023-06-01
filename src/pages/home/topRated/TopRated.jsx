import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

//css for all carousal is in Home style.scss

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie"); //send this to api call

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  //for every tab change we call API
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">TopRated</span>
        <SwitchTabs data={["Movies", "Shows"]} onTabChange={onTabChange} />
        {/* above we can render more things to like year month etc && 1st onTabChange is prop and 2nd one is method we created*/}
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};
export default TopRated;
