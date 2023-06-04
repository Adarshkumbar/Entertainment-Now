import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";
import dayjs from "dayjs";

//css for all carousal is in Home style.scss

const OnTheAir = () => {
  const [endpoint, setEndpoint] = useState("tv"); //send this to api call

  const { data, loading } = useFetch(`/${endpoint}/on_the_air/`);

  //for every tab change we call API
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  const d = new Date();
  console.log(d);

  const xD = dayjs(d).format("MM");

  console.log(xD);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">On The Air Shows</span>
        <SwitchTabs data={["Movies", "Shows"]} onTabChange={onTabChange} />
        {/* above we can render more things to like year month etc && 1st onTabChange is prop and 2nd one is method we created*/}
      </ContentWrapper>
    {    console.log(data?.results) }
          <Carousel
            data={data?.results}
            loading={loading}
            endpoint={endpoint}
          />
       
    </div>
  );
};

export default OnTheAir;
