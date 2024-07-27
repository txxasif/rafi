"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FlipWords } from "./ui/flip-words";
const words = ["Rafi", "Jainga Rafi"];
export default function Intro() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: -40 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-4xl"
      >
        If you think you're logical enough, <br /> then buckle up and listen to
        Rafi's wisdom. <br /> Welcome to the Quote Gallery of
        <FlipWords className="text-white text-4xl" words={words} /> <br />
      </motion.h1>
    </LampContainer>
  );
}
