import { NextResponse } from "next/server";
import { NextRequest, NextResponse as NextResponseType } from "next/server";
import connectDB from "@/db/connect";
import Quote from "@/db/QutoeSchema";
export async function POST(req: NextRequest): Promise<NextResponseType> {
  await connectDB();
  const body = await req.json();
  const newQuote = new Quote(body);
  await newQuote.save();
  return NextResponse.json({ message: "Done!" }, { status: 200 });
}
export async function GET(): Promise<NextResponseType> {
  await connectDB();
  const quotes = await Quote.find({});
  return NextResponse.json({ data: quotes }, { status: 200 });
}
