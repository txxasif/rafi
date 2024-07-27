"use client";

import Intro from "@/components/intro";
import AnimatedSection from "@/components/animateSection";
import QuoteListWithLamp from "@/components/quoteListWithLamp";
import ImageGallery from "@/components/image-gallery";

export default function Home() {
  return (
    <main className="">
      <AnimatedSection>
        <Intro />
      </AnimatedSection>
      <AnimatedSection>
        <ImageGallery />
      </AnimatedSection>
      {/* <QuoteListWithLamp /> */}
      {/* <AnimatedSection>
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <QuoteCard />
          </motion.div>
        </LampContainer>
      </AnimatedSection> */}
    </main>
  );
}
