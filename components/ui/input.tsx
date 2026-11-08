import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...p }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-[50px] w-full border-0 border-b border-white bg-transparent text-center text-[21px] tracking-[0.04em] text-white placeholder:text-white focus:border-brand focus:outline-none",
        className
      )}
      {...p}
    />
  )
);
Input.displayName = "Input";
