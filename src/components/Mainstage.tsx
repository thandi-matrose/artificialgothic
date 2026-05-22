import React, { type ReactElement, type ReactNode } from "react";

interface MainstageProps {
  children: ReactNode;
}
const Mainstage = ({ children }: MainstageProps) => {
  return (
    <>
      <main>{children} </main>
    </>
  );
};

export default Mainstage;
