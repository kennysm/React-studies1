import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  const names = ["a", "b", "c", "d", "e", "f"];
  const satellites = names.map((n) => <li>Satélite {n}</li>);

  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else title = <h4>{props.name}</h4>;
  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satélites</h4>
      <ul>{satellites}</ul>
      <hr></hr>
    </div>
  );
};

export default Planet;
