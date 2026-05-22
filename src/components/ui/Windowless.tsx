import React, { type ReactElement, type ReactNode } from "react";
import Draggable from "react-draggable"; // The default
interface WindowlessProps {
  position: [number, number];
  width?: string;
  children: ReactNode;
}
const Windowless = ({
  position,
  width = "200px",
  children,
}: WindowlessProps) => {
  return (
    <div
      className="windowless"
      style={{ top: position[0], left: position[1], width: width }}
    >
      {children}
    </div>
  );
};

export default Windowless;
