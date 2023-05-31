import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; //using this library
import "react-lazy-load-image-component/src/effects/blur.css"; //this css present in above library

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage className={className || ""} alt="" effect="blur" src={src} />
  );
};

export default Img;
