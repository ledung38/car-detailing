"use client";
import { cn } from "@/lib/utils/index";
import { motion, MotionProps } from "framer-motion";
import React from "react";

interface TextGradientProps extends MotionProps {
  as?: React.ElementType;
  className?: string;
}

export const TextGradient = ({
  className,
  as: TAg = motion.h2,
  ...props
}: TextGradientProps) => {
  return (
    <TAg
      className={cn(
        "bg-gradient-to-r from-[#0871eb] via-primary/80 text-center to-[#1565C0] bg-clip-text text-transparent",
        className
      )}
      {...props}
    ></TAg>
  );
};
