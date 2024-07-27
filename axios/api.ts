import axios from "axios";
import { IQuote } from "@/types";
const axiosAdmin = axios.create({
  baseURL: process.env.Backend_Url,
});
export const addQuote = async (quote: string) => {
  try {
    const { data } = await axiosAdmin.post<{ message: string }>("/api/quote", {
      quote,
    });
    return data.message;
  } catch (error) {
    throw new Error("Failed to add quote");
  }
};

export const getQuotes = async () => {
  try {
    const { data } = await axiosAdmin.get<{ data: IQuote[] }>("/api/quote");
    return data.data;
  } catch (error) {
    throw new Error("Failed to get quotes");
  }
};
