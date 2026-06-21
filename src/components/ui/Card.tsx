"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-white dark:bg-dark-200 shadow-sm",
      elevated: "bg-white dark:bg-dark-200 shadow-xl shadow-black/5 dark:shadow-black/30",
      outlined: "bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl transition-all duration-300",
          variants[variant],
          hover && "hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
