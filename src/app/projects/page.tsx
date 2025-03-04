// pages/index.tsx
"use client"; // Add this line at the top

import type { NextPage } from "next";
import Section from "@/components/home/Section";
import { motion, useScroll, useSpring } from "framer-motion";

const Projects: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ overflowX: "hidden", scrollSnapType: "y mandatory" }}>
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "black",
          transformOrigin: "0%",
          zIndex: 1000,
        }}
      />

      {/* Sections */}
      <Section id="section1" backgroundColor="lightblue">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Section 1
        </motion.h1>
      </Section>
      <Section id="section2" backgroundColor="lightgreen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Section 2
        </motion.h1>
      </Section>
      <Section id="section3" backgroundColor="lightcoral">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Section 3
        </motion.h1>
      </Section>
      <Section id="section4" backgroundColor="lightyellow">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Section 4
        </motion.h1>
      </Section>
    </div>
  );
};

export default Projects;