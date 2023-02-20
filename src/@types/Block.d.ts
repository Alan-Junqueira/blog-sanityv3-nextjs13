import { Span } from "./Span";

export interface Block {
  _key: string;
  _type: "block";
  children: Span[]
  markDefs: any[]
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}