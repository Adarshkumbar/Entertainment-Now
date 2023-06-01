import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return;   // return if name not present
        return (
          <div key={g} className="genre">
            {console.log("gg",genres)}
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
