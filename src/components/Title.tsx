import React from "react";
import { useState } from "react";
import { COLOURS } from "./constants";
import { getOutlineLogo } from "./Artist";
import type { BodyPart } from "./utils";

const Title = ({}) => {
  const id = "title";
  const info = <h3>This is info on the Title</h3>;
  var color = COLOURS.light;
  var weight = 10;
  getOutlineLogo(color, weight, 200);

  return (
    <div id={id}>
      <h1>Artificial Gothic</h1>
    </div>
  );
};

export default Title;
