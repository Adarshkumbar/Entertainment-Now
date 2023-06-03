import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
  // console.log("data",data);
  const { genres } = useSelector((state) => state.home);
  // console.log("inside comopo " ,genres);
  return (
    <div className="genres">
    
      {data?.map((gen) => {
        if (!genres[gen]?.name) return; // return if name not present
        return (
          <div key={gen} className="genre">
            {genres[gen]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
