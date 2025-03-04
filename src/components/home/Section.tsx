// components/Section.tsx
import React, { ReactNode } from "react";
import "@/app/globals.css";


interface SectionProps {
  id: string;
  children: ReactNode;
  backgroundColor: string;
}

const Section: React.FC<SectionProps> = ({ id, children, backgroundColor }) => {
  return (
    <section
      id={id}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
      }}
    >
      {children}
    </section>
  );
};

export default Section;