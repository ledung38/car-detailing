"use client";
import { AnimateSpan } from "@/components/common/Animate";
import { ArrowCircleRightIcon } from "@/components/icons";
import { Container } from "@/components/ui";
import { Routes } from "@/lib/enum/routes";
import { motion } from "motion/react";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden pb-0">
      <div className="absolute inset-0 -z-10 brightness-50 scale-120">
        {/* <SmoothLoopVideo src="/banner_video.mp4" /> */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/iM_xmlP0cLg?autoplay=1&mute=1&loop=1&playlist=iM_xmlP0cLg&controls=0&rel=0&modestbranding=1&showinfo=0&fs=0&iv_load_policy=3&color=white&playsinline=1"
          title="Sky Nice Car Detailing Sydney | Mobile Car Wash & Detailing Service"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <Container>
        <motion.div
          className="h-full flex gap-2 flex-col items-center pb-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          {/* Badge */}
          {/* <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Premium Mobile Car Detailing
                </span>
              </div>
            </motion.div> */}

          {/* Heading */}
          {/* <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            >
              <span className="text-foreground">We Come To You</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Professional Car Care
              </span>
            </motion.h1> */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl relative lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            <span className="text-foreground">MOBILE CAR DETAILING </span>
            <span className="bg-gradient-to-r from-primary italic via-accent to-primary bg-clip-text text-transparent">
              SYDNEY
            </span>
            <img
              src={"/line-title.png"}
              className=" absolute left-1/2 -bottom-2 h-[3px] w-[95%] -translate-x-1/2"
            />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground text-center   leading-relaxed mt-2"
          >
            Save time, protect your car, and enjoy that brand-new shine again.
            Our expert detailers bring mobile precision to your doorstep across
            Sydney.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-20 py-4 max-w-xl "
          >
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Cars Detailed" },
              { number: "5★", label: "Rated" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-black text-secondary">
                  {stat.number}
                </p>
                <p className="text-sm font-medium text-[#c8d4e0] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href={Routes.BOOKING} className="w-full sm:w-auto">
              <button
                // whileHover={{ scale: 1.05, translateY: -2 }}
                // whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-[oklch(0.62_0.18_250)] to-[oklch(0.55_0.15_250)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[oklch(0.62_0.18_250)]/30 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  GET AN INSTANT QUOTE
                  <AnimateSpan
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowCircleRightIcon className="size-6" />
                  </AnimateSpan>
                </span>
              </button>
            </Link>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className=" font-bold tracking-tight mt-2"
          >
            <span className="text-foreground">We Come To You - </span>

            <span className="text-foreground">Professional Car Care</span>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
