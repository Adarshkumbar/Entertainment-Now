import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"; // Got components from  this library --->THis component gives progress bar we used in the project to show the  Rating
import "react-circular-progressbar/dist/styles.css";  // this css file also from same library as above used for styling

import "./style.scss";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating">
      {/* below component is alr defined i.e prebuilt we just imported ⬆ above ...we just pass required props*/}
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
