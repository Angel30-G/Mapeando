import { ReactNode } from "react";

export default interface TextProps {
  content: string | string[];
  color?: string;
  background?: string;
  styles?: React.CSSProperties;
}
