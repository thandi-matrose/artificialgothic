import React, { type ReactElement, type ReactNode } from "react";
import Draggable from "react-draggable"; // The default
interface WindowProps {
  title: string;
  position: [number, number];
  width?: string;
  toolbar?: boolean;
  children: ReactNode;
}
const Window = ({
  title,
  position,
  width = "200px",
  toolbar = true,
  children,
}: WindowProps) => {
  const toolbarElement = toolbar ? (
    <div className="window-bar">{title}</div>
  ) : (
    <></>
  );
  return (
    <>
      <div
        className="window"
        style={{ top: position[0], left: position[1], width: width }}
      >
        {toolbarElement}
        <div className="window-content">{children}</div>
      </div>
    </>
  );
};

export default Window;
