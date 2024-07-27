import { getQuotes } from "@/axios/api";
import QuoteListElement from "./quoteListElement";

export default async function QuoteList() {
  const quotes = await getQuotes();
  return <QuoteListElement quotes={quotes} />;
}
