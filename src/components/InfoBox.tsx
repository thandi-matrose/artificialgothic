import React, { useState, useEffect, type ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}
const InfoBox = ({ children }: InfoProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 5 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="info-box"
      style={{
        position: "fixed",
        top: 0,
        left: 0,

        pointerEvents: "none", // Prevents div from blocking clicks
        transform: `translate(${position.x}px, ${position.y}px)`,
        // Use a transition for a "smoothing" lag effect
        transition: "transform 0.1s ease-out",
        zIndex: 9999,
      }}
    >
      {children}
    </div>
  );
};

export default InfoBox;
