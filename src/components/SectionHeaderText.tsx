import { ReactNode } from "react";

interface SectionHeaderTextProps {
  children: ReactNode;
}

export function SectionHeaderText({ children }: SectionHeaderTextProps) {
  return (
    <h2 className="font-montserrat text-3xl font-bold uppercase">{children}</h2>
  );
}
