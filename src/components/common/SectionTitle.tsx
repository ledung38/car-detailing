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
        "relative inline-block text-white text-xl md:text-2xl font-bold tracking-wide",
        className,
      )}
      {...props}
    >
      {title}
      <span
        className="
            absolute left-1/2 -bottom-2 h-[3px] w-[95%] 
            -translate-x-1/2 
            bg-gradient-to-r from-transparent via-primary to-transparent 
            blur-[1px] drop-shadow-[0_0_6px_#00b3ff]
          "
      />
    </Tag>
  );
};

export default SectionTitle;
