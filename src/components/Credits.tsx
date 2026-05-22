import React, { type ReactElement, type ReactNode } from "react";

interface CreditsProps {}
const Credits = ({}: CreditsProps) => {
  const current = new Date();

  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  return (
    <>
      <section id="credits">the desert of the real {date}</section>
    </>
  );
};

export default Credits;
