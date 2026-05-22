import { track } from "motion/react-client";
import { useEffect, useState, type ReactElement } from "react";
import type { JSX } from "react/jsx-runtime";

export const TRACKLIST = [
  "Simulacrum Creation Story",
  "GIGANTA DATA",
  "vehicular manslaughter",
  "The Dancers of Dream Alley",
];
const Tracklist = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const changeSelectedTrack = (down: boolean) => {
    if (down) {
      setSelectedIndex(
        (selectedIndex) => (selectedIndex + 1) % TRACKLIST.length,
      );
    } else {
      setSelectedIndex(
        (selectedIndex) =>
          (selectedIndex + TRACKLIST.length - 1) % TRACKLIST.length,
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "Down") {
        console.log("Global Down pressed; Selected Index: " + selectedIndex);
        changeSelectedTrack(true);
      } else if (event.key === "ArrowUp" || event.key === "Up") {
        console.log("Global Up pressed; Selected Index: " + selectedIndex);
        changeSelectedTrack(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Always clean up the listener to prevent memory leaks
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ol id="tracklist">
      {TRACKLIST.map((item, index) => (
        <li key={index} className={index === selectedIndex ? "active" : ""}>
          {item}
        </li>
      ))}
    </ol>
  );
};

export default Tracklist;
