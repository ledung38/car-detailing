import React from "react";

import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Routes } from "@/lib/enum/routes";
import Image from "next/image";

// Compact Banner for Secondary Pages
export const CompatHome = () => {
  const router = useAppRouter();

  return (
    <div>
      <Image
        src={"/logo_header_v3.png"}
        width={1920}
        height={1080}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover object-left-center max-sm:object-left"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight"
        >
          312312312312312
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto"
        >
          312312312312312
        </motion.p>

        {/* Breadcrumb-like Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 group"
        >
          <button
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white font-semibold hover:bg-white/30 transition-all duration-300"
            onClick={() => router.push(Routes.BOOKING)}
          >
            <span>{textButton}</span>
            <ArrowRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
      {/* Floating Shapes - Hidden on mobile */}
      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl hidden sm:block"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl hidden sm:block"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default CompatHome;
