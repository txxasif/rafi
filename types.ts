import React, { ChangeEvent, FormEvent } from "react";
export interface ChildrenPropsType {
  children: React.ReactNode;
}
export interface IQuote {
  _id: string;
  quote: string;
}
export type ChangeEventType = ChangeEvent<HTMLTextAreaElement>;
export type FormEventType = FormEvent<HTMLFormElement>;
