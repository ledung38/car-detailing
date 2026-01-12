"use client";
import SectionTitle from "@/components/common/SectionTitle";
import { ArrowRightIcon, CheckIcon, TickIcon } from "@/components/icons";
import { Container } from "@/components/ui";
import { Routes } from "@/lib/enum/routes";
import { SERVICES } from "@/modules/service/contants";
import { CheckCircle2, Clock } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Pricing: React.FC = () => {
  const data = [
    SERVICES[0],
    SERVICES[2],
    SERVICES[1],
    SERVICES[3],
    SERVICES[4],
    SERVICES[5],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Extract prices for all sizes
  const extractPrices = (priceRange: string) => {
    const parts = priceRange.split("|");
    return {
      S: parts[0]?.match(/\$(\d+)/)?.[1] || "0",
      M: parts[1]?.match(/\$(\d+)/)?.[1] || "0",
      L: parts[2]?.match(/\$(\d+)/)?.[1] || "0",
    };
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <Container>
          <motion.div
            className="text-center space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle title="Transparent Pricing" variants={itemVariants} />
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Quality Car Care at{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Competitive Prices
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 max-w-3xl mx-auto"
            >
              No hidden fees. All packages include premium products and expert
              detailing. Book now and get expert mobile car detailing
              Sydney-wide.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-5 overflow-hidden">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {data.map((service, index) => {
              const prices = extractPrices(service.priceRange);
              const isPopular = index === 1; // Full Detail Package

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group h-full"
                  whileHover={{ y: -8 }}
                >
                  <div
                    className={`relative h-full rounded-2xl border transition-all duration-300  flex flex-col ${
                      isPopular
                        ? "bg-gradient-to-br from-primary/20 to-accent/20 border-primary/60 shadow-xl ring-2 ring-primary/30"
                        : "bg-card border-border/40 hover:border-primary/50 hover:shadow-lg"
                    }`}
                  >
                    {/* Popular Badge */}
                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden rounded-2xl">
                      <Image
                        src={service.avatar}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex flex-col h-full">
                      {/* Title & Duration */}
                      <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-sm lg:text-base text-foreground/70 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Prices - All 3 sizes */}
                      <div className="my-6 pb-6 border-t border-border/40">
                        <p className="text-xs uppercase text-foreground/50 tracking-wider font-semibold mb-3">
                          Pricing
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">
                              ${prices.S}
                            </p>
                            <p className="text-xs text-foreground/60 mt-1">
                              Small
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">
                              ${prices.M}
                            </p>
                            <p className="text-xs text-foreground/60 mt-1">
                              Medium
                            </p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">
                              ${prices.L}
                            </p>
                            <p className="text-xs text-foreground/60 mt-1">
                              Large
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3 mb-6 flex-1">
                        {service.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-sm text-foreground/70"
                          >
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href={Routes.BOOKING} className="w-full block">
                        <button
                          className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                            isPopular
                              ? "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30"
                              : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20"
                          }`}
                        >
                          <span>Book Now</span>
                          <ArrowRightIcon className="mt-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="relative py-20 overflow-hidden bg-primary/30 border-t border-border/40">
        <Container>
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle title="Why Choose Us" variants={itemVariants} />
            <h2 className="text-4xl font-bold text-foreground mt-4">
              What Makes Our Pricing Unbeatable
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                title: "No Hidden Fees",
                description: "Upfront, transparent pricing with no surprises",
              },
              {
                title: "Mobile Service",
                description: "We come to you - save time and hassle",
              },
              {
                title: "Premium Products",
                description:
                  "Top-tier detailing products used in every service",
              },
              {
                title: "Expert Team",
                description:
                  "5-star rated professionals with years of experience",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-xl bg-primary/20  border border-border/40 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <TickIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* FAQ-like section */}
      <section className="relative  bg-primary/30 py-20 overflow-hidden">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Questions About Pricing?
              </h2>
              <p className="text-lg text-foreground/70">
                Get your instant quote and book your appointment today
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <Link href={Routes.BOOKING}>
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2 group">
                  <span>Get Your Instant Quote</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default Pricing;
