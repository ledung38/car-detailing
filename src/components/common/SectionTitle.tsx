"use client";
// SectionTitle.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface SectionTitleProps extends MotionProps {
  title: string;
  as?: React.ElementType;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  as: Tag = motion.h2,
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "relative inline-block text-primary text-xl md:text-2xl font-bold tracking-wide",
        className,
      )}
      {...props}
    >
      {title}
      <img
        src={"/line-title.png"}
        className=" absolute left-1/2 -bottom-2 h-[3px] w-[95%] -translate-x-1/2"
      />
      {/* <span
        className="
            absolute left-1/2 -bottom-2 h-[3px] w-[95%] 
            -translate-x-1/2 
            bg-gradient-to-r from-transparent via-primary to-transparent 
           
          "
      /> */}
    </Tag>
  );
};

export default SectionTitle;
