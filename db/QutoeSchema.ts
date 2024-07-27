import { Schema, model, models, Document } from "mongoose";

export interface IQuote extends Document {
  quote: string;
}

const quoteSchema = new Schema<IQuote>({
  quote: { type: String, required: true },
});

const Quote = models.Quote || model<IQuote>("Quote", quoteSchema);

export default Quote;
