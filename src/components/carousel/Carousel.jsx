import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill, // these are arrow icons
  BsFillArrowRightCircleFill,
  BsCaretLeft,
  BsCaretRight,
} from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../cicleRating/CircleRating";
import Genres from "../genres/Genres";

import "./style.scss";
import ContentWrapper from "../contentWrapper/contentWrapper";

const Carousel = (props) => {
  const { data, loading, endpoint, title } = props;
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 18)
        : container.scrollLeft + (container.offsetWidth + 18);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    // this function is works / visible while loading/fetching data
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsCaretLeft
          className=" carouselLefttNav arrow"
          onClick={() => navigation("left")}
        />
        <BsCaretRight
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    {/* .vote_average got this from api and  toFixed(1) this return only one decimal point value*/}
                    <Genres data={item.genre_ids.slice(0, 3)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_date || item.first_air_date).format(
                        "MMM D, YYYY"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
