import React, { Fragment } from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <Fragment>
      <img class="gray-img" src={props.img_url} alt="erro"></img>
    </Fragment>
  );
};

export default GrayImg;
