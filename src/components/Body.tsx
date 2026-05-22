import React, { type ReactElement, type ReactNode } from "react";

import { getStar } from "./Artist";
import { COLOURS } from "./constants";
import type { BodyPart } from "./utils";

interface BodyProps {
  setInfoState: (info: ReactElement) => void;
}

export const MENU_ITEMS: BodyPart[] = [
  {
    id: 0,
    name: "Simulacrum Creation Story",
    place: "Mind",
    location: [53, 115],
  },

  {
    id: 4,
    name: "Selling on Camera",
    place: "Left Hand",
    location: [203, 175],
  },

  {
    id: 3,
    name: "vehicular manslaughter",
    place: "Right Hand",
    location: [203, 55],
  },

  {
    id: 2,
    name: "GIGANTA DATA",
    place: "Heart",
    location: [133, 130],
  },

  {
    id: 1,
    name: "Online Town Hall",
    place: "Leg",
    location: [300, 130],
  },
  {
    id: 5,
    name: "The Dancers of Dream Alley",
    place: "Tummy",
    location: [175, 115],
  },
];

const Body = ({ setInfoState }: BodyProps) => {
  const info = (
    <div style={{ background: COLOURS.accent }}>
      THIS IS THE BODY THE BODY THE BODY
    </div>
  );
  const handleHoverIn = (e: React.MouseEvent<HTMLElement>) => {
    setInfoState(info);
  };

  var stars = [];

  for (let index = 0; index < MENU_ITEMS.length; index++) {
    const item = MENU_ITEMS[index];
    const starInfo = (e: React.MouseEvent<HTMLElement>) => {
      setInfoState(
        <>
          <span
            className="menu-place"
            style={{
              fontStyle: "italic",
              fontSize: "15px",
              lineHeight: "20px",
              textTransform: "uppercase",
              backgroundColor: COLOURS.accent,
            }}
          >
            {item.place}
          </span>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "15px",
              lineHeight: "15px",
              textAlign: "center",
            }}
          >
            Track {item.id + 1}
          </p>
          <h5
            className="track"
            style={{
              fontStyle: "italic",
              fontSize: "23px",
              lineHeight: "20px",
            }}
          >
            “{item.name}”
          </h5>
        </>,
      );
    };

    stars.push(
      <a onMouseEnter={starInfo}>
        {getStar(item.location[0], item.location[1])}
      </a>,
    );
  }

  return (
    <>
      <aside id="body" onMouseEnter={handleHoverIn}>
        <img src="body.svg" width="250px" className="photocopy" />;{stars}
      </aside>
    </>
  );
};

export default Body;
