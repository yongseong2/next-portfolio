import { HTMLAttributes, ReactNode } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Box({ children, className, ...rest }: BoxProps) {
  return (
    <div
      {...rest}
      className={`w-full h-full px-28 py-4 overflow-y-auto rounded shadow-md  bg-white text-black shadow-dark-500/50 ${className}`}
    >
      {children}
    </div>
  );
}
