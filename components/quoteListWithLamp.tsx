import { motion } from "framer-motion";
import AnimatedSection from "./animateSection";
import { LampContainer } from "./ui/lamp";
import { QuoteCard } from "./QuoteCard";
import { getQuotes } from "@/axios/api";
import { IQuote } from "@/types";
export default async function QuoteListWithLamp() {
  const quotes = await getQuotes();

  return (
    <>
      {quotes.map((quote) => (
        <Quote key={quote._id} quote={quote} />
      ))}
    </>
  );
}
function Quote({ quote }: { quote: IQuote }) {
  return (
    <AnimatedSection key={quote._id}>
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
          <QuoteCard quote={quote.quote} />
        </motion.div>
      </LampContainer>
    </AnimatedSection>
  );
}
