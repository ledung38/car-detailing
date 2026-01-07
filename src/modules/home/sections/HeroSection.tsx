"use client";
import SmoothLoopVideo from "@/components/common/BannerVideo";
import { Button, Container } from "@/components/ui";
import { ChevronRight, Sparkles } from "lucide-react";
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
    <section className="relative min-h-screen w-full flex items-end justify-center overflow-hidden pt-16 pb-0">
      <div className="absolute inset-0 -z-10">
        <SmoothLoopVideo src="/banner_video.mp4" />
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
            {/* neon underline */}

            <span
              className="
            absolute left-1/2 -bottom-2 h-[3px] w-[95%] 
            -translate-x-1/2 
            bg-gradient-to-r from-transparent via-primary to-transparent 
            blur-[1px] drop-shadow-[0_0_6px_#00b3ff]
          "
            />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/70 text-center   leading-relaxed"
          >
            Save time, protect your car, and enjoy that brand-new shine again.
            Our expert detailers bring mobile precision to your doorstep across
            Sydney.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 py-4 max-w-xl border-y border-primary/20"
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
