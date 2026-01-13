"use client";
import { Card, Container } from "@/components/ui";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Shield,
  Zap,
  Heart,
  Trophy,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { AnimateDiv } from "@/components/common/Animate";
import { TickIcon } from "@/components/icons";
import CounterStat from "@/modules/home/sections/CounterStat";
import { TextGradient } from "@/components/common/TextGradient";
import miniPackage from "@/lib/assets/images/mini-package.png";
import fullDetail from "@/lib/assets/images/full-detail-package.png";
import extensionDetail from "@/lib/assets/images/extension-detail.png";
import enhancementPackage from "@/lib/assets/images/enhancement-package.png";
import ceramicCoatingPackage from "@/lib/assets/images/ceramic-coating-package.png";

const ImageBg = [
  miniPackage,
  fullDetail,
  enhancementPackage,
  ceramicCoatingPackage,
];
interface BenefitCard {
  title: string;
  description: string;
}

const FeatureItem = ({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <AnimateDiv
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start gap-4 group"
    >
      <AnimateDiv
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 mt-1"
      >
        <div className="flex items-center justify-center group-hover:scale-110 transition-all duration-300">
          <TickIcon className="size-8 shrink-0 " />
        </div>
      </AnimateDiv>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-background mb-1 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-md sm:text-lg text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </AnimateDiv>
  );
};

const WhyChooseUs = () => {
  const benefits: BenefitCard[] = [
    {
      title: "Mobile Convenience",
      description:
        "We come to you. No need to drive to a garage, just relax while we detail your car at home.",
    },
    {
      title: "Professional Grade",
      description:
        "Certified detailers with 5+ years experience using premium products and latest techniques.",
    },
    {
      title: "Customer First",
      description:
        "Pay only after you're satisfied. Your happiness is our priority and guarantee.",
    },
    {
      title: "Eco-Friendly",
      description:
        "100% biodegradable products that are safe for your car and the environment.",
    },
    {
      title: "Flexible Schedule",
      description:
        "Book at your convenience. Monday to Sunday, 8AM to 6PM. Weekend appointments welcome.",
    },
    {
      title: "Guaranteed Quality",
      description:
        "Premium finishes backed by our satisfaction guarantee on every service.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-primary/2 to-primary/40">
      <div className="absolute inset-0 bg-[url('/bg_layer.webp')] bg-repeat bg-[length:200px_133px] dark:brightness-40 contrast-110 -z-1"></div>

      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle title="Why Sky Nice" />

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-background"
          >
            Premium Care, Your Way
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted max-w-2xl mx-auto"
          >
            {`We're not just detailers—we're car care partners committed to
            delivering excellence, every time.`}
          </motion.p>
        </motion.div>

        {/* Features Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20 max-sm:gap-4">
          {/* Left Column - Features List */}
          <AnimateDiv
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.slice(0, 3).map((feature, idx) => (
              <FeatureItem
                key={idx}
                title={feature.title}
                description={feature.description}
                delay={idx * 0.1}
              />
            ))}
          </AnimateDiv>

          {/* Right Column - Features List */}
          <AnimateDiv
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.slice(3, 6).map((feature, idx) => (
              <FeatureItem
                key={idx + 3}
                title={feature.title}
                description={feature.description}
                delay={idx * 0.1}
              />
            ))}
          </AnimateDiv>
        </div>

        {/* Trust Section */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white items-center py-12 rounded-2xl border border-primary/20 px-8 lg:px-12 bg-gradient-to-br from-primary/5 to-accent/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold mb-2">Built on Trust</p>
              <h3 className="text-3xl lg:text-4xl font-bold text-muted">
                {`Trusted by Sydney's Best`}
              </h3>
            </div>

            <p className="text-lg text-muted leading-relaxed">
              {`Over 500 happy customers and 1000+ cars detailed. We've earned our
              reputation through consistent quality, professional service, and
              unwavering commitment to customer satisfaction.`}
            </p>

            <div className="space-y-3">
              {[
                "100% Satisfaction Guarantee",
                "Certified Detailers & Products",
                "5-Star Rated Service",
                "Fully Insured & Licensed",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <TickIcon className="w-5 h-5 text-accent flex-shrink-0 " />

                  <span className="text-[#0A84FF] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "500+", label: "Happy Clients", icon: Users },
              { number: "1000+", label: "Cars Detailed", icon: TrendingUp },
              { number: "5★", label: "Rating", icon: Trophy },
              { number: "24/7", label: "Customer Support", icon: Clock },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;

              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl z-10  relative text-center bg-accent/30"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="absolute inset-0 rounded-xl bg-center bg-cover -z-10"
                    style={{
                      backgroundImage: `url(${ImageBg[idx].src})`,
                      filter: "brightness(0.5) contrast(1.1)",
                    }}
                  ></div>

                  <div className="p-3 bg-black/20 rounded-lg w-fit mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-white">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Highlight */}
        <motion.div
          className="mt-12 p-8 relative lg:p-12 rounded-2xl z-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-top -z-1 rounded-2xl"
            style={{
              backgroundImage: "url('/compat_home.png')",
              filter: "brightness(0.6) contrast(1.1)",
            }}
          />
          <h3 className="text-2xl font-bold text-foreground mb-6 z-10">
            Our Promise to You
          </h3>
          <div className="space-y-4">
            <p className="text-foreground     leading-relaxed">
              <span className="text-primary font-semibold">
                Professional Excellence:
              </span>{" "}
              Every team member is certified with 5+ years of experience in
              premium car detailing.
            </p>
            <p className="text-foreground leading-relaxed">
              <span className="text-primary font-semibold">
                Quality Guarantee:
              </span>{" "}
              {`If you're not completely satisfied, we'll rework at no charge.`}
            </p>
            <p className="text-foreground leading-relaxed">
              <span className="text-primary font-semibold">
                Eco-Responsible:
              </span>{" "}
              100% biodegradable products—safe for your car and the environment.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
