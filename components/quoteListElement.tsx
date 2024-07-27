"use client";
import { getQuotes } from "@/axios/api";
import { IQuote } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
export default function QuoteListElement({ quotes }: { quotes: IQuote[] }) {
  const { data } = useQuery({
    queryFn: getQuotes,
    queryKey: ["quotes"],
    initialData: quotes,
  });
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Inspiring Quotes
      </h2>
      {quotes.length === 0 ? (
        <p className="text-center text-gray-600">
          No quotes available at the moment.
        </p>
      ) : (
        <ul className="space-y-4">
          {data.map((quote) => (
            <li
              key={quote._id}
              className="bg-white p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start">
                <Quote className="w-6 h-6 text-blue-500 mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{quote.quote}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
