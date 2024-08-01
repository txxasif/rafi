"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { LampContainerForImages } from "./ui/lamp-for-images";

const images = [
  { image: "/images/1.jpg", alt: "Image 1" },
  { image: "/images/2.jpg", alt: "Image 2" },
  { image: "/images/3.jpg", alt: "Image 3" },
  { image: "/images/4.jpg", alt: "Image 4" },
  { image: "/images/5.jpg", alt: "Image 5" },
];
//xxxx

export default function ImageGallery() {
  return (
    <LampContainerForImages>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 90 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full max-w-7xl relative z-50"
      >
        <InfiniteMovingCards items={images} direction="right" speed="normal" />
      </motion.div>
    </LampContainerForImages>
  );
}
