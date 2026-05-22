import React, { useState } from "react";
import type { ReactElement, SVGProps } from "react";
import type { BodyPart } from "./utils.tsx";
import { createArc, createLine, ARCS, PARALLEL_LINES } from "./Artist.tsx";
import { COLOURS } from "./constants.tsx";
import { q } from "motion/react-client";
//width = 74 ... height =  58
const INTERNAL_STEP = 8;

const RES = 1;
const LOGICAL_WIDTH = 75;
const LOGICAL_HEIGHT = 59;
const VIEW_WIDTH = LOGICAL_WIDTH * INTERNAL_STEP;
const VIEW_HEIGHT = LOGICAL_HEIGHT * INTERNAL_STEP;
const WIDTH = VIEW_WIDTH * RES;
const HEIGHT = VIEW_HEIGHT * RES;
const strokeWidth = 1;
const stroke = COLOURS.light;

interface AstroturfProps {
  setInfoState: (info: ReactElement) => void;
}

const Astroturf = ({ setInfoState }: AstroturfProps) => {
  const viewBox = "0 0 " + { VIEW_WIDTH } + " " + { VIEW_HEIGHT };
  const info = (
    <div style={{ background: COLOURS.accent }}>
      <h3>ASTROTURF LAWNS ARE ARABLE LAND</h3>
      <p>Don't believe me? I'll show you how life lives here </p>
    </div>
  );
  const handleHoverIn = (e: React.MouseEvent<HTMLElement>) => {
    setInfoState(info);
  };

  const path = `${renderCircles()} ${renderLines()}`;

  return (
    <>
      <div id="astroturf" onMouseEnter={handleHoverIn}>
        <svg width={WIDTH} height={HEIGHT} viewBox={viewBox}>
          <path
            d={path}
            fill="transparent"
            stroke={stroke}
            stroke-width={strokeWidth}
          ></path>
        </svg>
      </div>
    </>
  );
};

function renderCircles() {
  var circles = "";
  for (let index = 0; index < ARCS.length; index++) {
    const arc = ARCS[index];
    circles += `${generateConcentricCircles(arc.cx, arc.cy, arc.startRadius, arc.direction, arc.numCircles, arc.type)} `;
  }
  return circles;
}

function renderLines() {
  var lines = "";
  for (let index = 0; index < PARALLEL_LINES.length; index++) {
    const line = PARALLEL_LINES[index];
    lines += `${generateParallelLines(
      line.startX,
      line.startY,
      line.length,
      line.direction,
      line.numLines,
    )} `;
  }
  return lines;
}

function generateConcentricCircles(
  centreX: number,
  centreY: number,
  startRadius: number,
  direction: string,
  numCircles: number,
  type: string,
) {
  var circles = "";

  for (let index = 0; index < numCircles; index++) {
    circles += `${createArc(
      centreX * INTERNAL_STEP,
      centreY * INTERNAL_STEP,
      (startRadius + index) * INTERNAL_STEP,
      direction,
      type,
    )} `;
  }

  return circles;
}

function generateParallelLines(
  startX: number,
  startY: number,
  length: number,
  direction: string,
  numLines: number,
) {
  var lines = "";
  for (let index = 0; index < numLines; index++) {
    const currStartX = direction == "V" ? startX + index : startX;
    const currStartY = direction == "H" ? startY + index : startY;
    lines += `${createLine(
      currStartX * INTERNAL_STEP,
      currStartY * INTERNAL_STEP,
      length * INTERNAL_STEP,
      direction,
    )} `;
  }
  return lines;
}
function drawGrid() {
  var lines = "";
  for (let index = 0; index < LOGICAL_WIDTH; index++) {
    lines += `${createLine(index * INTERNAL_STEP, 0, VIEW_HEIGHT, "V")} `;
  }
  return lines;
}

export default Astroturf;
