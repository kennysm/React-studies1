import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";
import Form from "./form";

async function getSatellites(id) {
  let response = await fetch(`https://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);
  useEffect((props) => {
    getSatellites(props).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  const addSatellite = (new_satellites) => {
    setSatellites([...new_satellites, new_satellites]);
  };

  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <ul>{props.name}</ul>
      </h4>
    );
  } else title = <h4>{props.name}</h4>;

  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satélites</h4>
      <hr />
      <Form addSatellite={addSatellite} />
      <hr />
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
export default Planet;
