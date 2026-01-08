"use client";
import { useInView, motion } from "motion/react";
import React from "react";

const CounterStat = ({
  number,
  suffix,
  label,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return; // ⛔ chưa scroll tới thì không chạy

    let start = 0;
    const end = number;
    const duration = 2; // giây
    const fps = 60;
    const increment = end / (duration * fps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
        {count}
        <span className="text-xl sm:text-2xl ml-1">{suffix}</span>
      </div>
      <p className="text-md sm:text-lg text-white/90 font-semibold mt-2 drop-shadow-md">
        {label}
      </p>
    </motion.div>
  );
};

export default CounterStat;
