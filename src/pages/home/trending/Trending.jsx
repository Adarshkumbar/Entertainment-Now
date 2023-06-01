import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

//css for all carousal is in Home style.scss

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day"); //send this to api call

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  //for every tab change we call API
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        {/* above we can render more things to like year month etc && 1st onTabChange is prop and 2nd one is method we created*/}
      </ContentWrapper>
        <Carousel data={data?.results} loading ={loading} />
    </div>
  );
};
export default Trending;
