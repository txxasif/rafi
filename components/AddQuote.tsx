"use client";
import { useState } from "react";
import { ChangeEventType, FormEventType } from "@/types";
import useMutationHook from "@/hooks/useMutationHook";
import { addQuote } from "@/axios/api";
import { PlusCircle } from "lucide-react";

const AddQuote = () => {
  const [quote, setQuote] = useState("");
  const mutation = useMutationHook(addQuote, {
    key: "quotes",
    onSuccess: (data) => {
      console.log("Quote added successfully");
    },
  });

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    mutation.mutate(quote);
    setQuote("");
  };

  const handleChange = (e: ChangeEventType) => {
    setQuote(e.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={quote}
            onChange={handleChange}
            placeholder="Enter your quote here..."
            aria-label="Quote input"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
          disabled={mutation.isPending || quote.trim() === ""}
        >
          {mutation.isPending ? (
            <span className="animate-pulse">Submitting...</span>
          ) : (
            <>
              <PlusCircle className="w-5 h-5 mr-2" />
              <span>Submit Quote</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddQuote;
