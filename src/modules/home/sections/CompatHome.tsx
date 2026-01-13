"use client";
import React from "react";

import { motion } from "motion/react";
import { ArrowRightIcon } from "@/components/icons";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Routes } from "@/lib/enum/routes";
import Image from "next/image";
import { Container } from "@/components/ui";

// Compact Banner for Secondary Pages
export const CompatHome = () => {
  const router = useAppRouter();

  return (
    <div className="relative min-h-[350px] overflow-hidden flex items-center">
      {/* Background Image - Right Side */}
      <div className="absolute inset-0">
        <Image
          src={"/compat_home4.png"}
          width={1920}
          height={1080}
          alt="Professional car detailing service background"
          className="absolute inset-0 w-full h-full object-cover object-right max-md:object-center"
          priority
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 w-full h-full mx-auto flex items-center ">
        <div className="w-full md:w-1/2 py-10 ">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 "
          >
            <span className="text-xs sm:text-sm uppercase tracking-widest text-blue-300 font-semibold">
              Premium Car Detailing Service
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl  font-black text-white mb-6 tracking-tight leading-tight"
          >
            Professional Car Detailing Excellence
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed"
          >
            {`Expert automotive detailing services that restore and protect your
            vehicle's paint, interior, and exterior. Certified professionals
            using premium products for guaranteed results.`}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <button
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 px-8 py-3 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:border-white/60"
              onClick={() => router.push(Routes.BOOKING)}
            >
              <span>Book Your Detail</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-white/5 rounded-full opacity-20"></div>
    </div>
  );
};

export default CompatHome;
