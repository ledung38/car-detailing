"use client";
import { Container, Button } from "@/components/ui";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight, Zap, Shield, Sparkles } from "lucide-react";

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2 },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 pb-0">
      {/* Advanced Background with Multiple Layers */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl opacity-60"
          animate={{
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 right-20 w-96 h-96 bg-gradient-to-tl from-purple-600/25 to-pink-500/20 rounded-full blur-3xl opacity-50"
          animate={{
            x: [0, -60, 40, -30, 0],
            y: [0, 50, -40, 25, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-cyan-500/15 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 0.9, 1.1, 1],
            opacity: [0.4, 0.6, 0.3, 0.5, 0.4],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-grid-white/5"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial Gradient Overlay */}
        <div
          className="absolute inset-0 bg-radial-gradient opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(0, 255, 200, 0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      <Container>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Premium Mobile Car Detailing
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            >
              <span className="text-foreground">We Come To You</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Professional Car Care
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 max-w-xl leading-relaxed"
            >
              Save time, protect your car, and enjoy that brand-new shine again.
              Our expert detailers bring mobile precision to your doorstep
              across Sydney.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6 border-y border-primary/20"
            >
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-foreground/60">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">1000+</p>
                <p className="text-sm text-foreground/60">Cars Detailed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5★</p>
                <p className="text-sm text-foreground/60">Rated</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/booking" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg flex items-center gap-2 group">
                  Book Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/service" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto h-12 border-primary/30 text-foreground hover:bg-primary/10 font-semibold rounded-lg"
                >
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full min-h-[400px] hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl" />

            {/* Animated Car Icon / Illustration */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Placeholder for car illustration */}
              <div className="text-center space-y-4">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center border border-primary/30">
                  <svg
                    className="w-32 h-32 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 3h8a2 2 0 012 2v12H6V5a2 2 0 012-2zm2 15v2h4v-2"
                    />
                  </svg>
                </div>
                <p className="text-foreground/60 text-sm">
                  Professional Detailing Equipment
                </p>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              className="absolute bottom-8 left-0 bg-card border border-primary/30 backdrop-blur-lg rounded-xl p-4 shadow-lg max-w-xs"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.2,
              }}
            >
              <p className="font-semibold text-foreground text-sm">
                Eco-Friendly Products
              </p>
              <p className="text-xs text-foreground/60">
                Safe for your car & environment
              </p>
            </motion.div>

            <motion.div
              className="absolute top-20 right-0 bg-card border border-accent/30 backdrop-blur-lg rounded-xl p-4 shadow-lg max-w-xs"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            >
              <p className="font-semibold text-foreground text-sm">
                Flexible Schedule
              </p>
              <p className="text-xs text-foreground/60">
                Available Mon-Sun, 8AM-6PM
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
