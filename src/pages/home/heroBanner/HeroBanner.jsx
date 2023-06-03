import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; //use to navigate to url/Route
import "./style.scss";

import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState(""); // sets background img of HOME PAGE
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/popular"); //api call

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path; //got this from api and assign to bg to set background image of home page
    setBackground(bg);
  }, [data]);

  //this method takes input and sends via component
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`); //means go to search page . cuz path-> /search/:query (params)
      console.log(query);
    }
  };

  // const searchBtn = (e) =>{
  //     console.log("e");
  // }

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of Movies, Shows and people to dicover. Explore Now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or show ......"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button type="submit" onClick={(e) => navigate(`/search/${query}`)}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default HeroBanner;
