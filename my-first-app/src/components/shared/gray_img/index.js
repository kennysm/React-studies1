import React, { Fragment } from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <Fragment>
      <img
        className={props.gray ? "gray-img" : "color-img"}
        src={props.img_url}
        alt="erro"
      ></img>
    </Fragment>
  );
};

export default GrayImg;
