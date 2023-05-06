import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="px-10 py-2 bg-secondary-500 hover:bg-primary-500 hover:text-white rounded-md transition-colors"
    >
      {text}
    </button>
  );
}
