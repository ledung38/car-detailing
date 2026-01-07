"use client";
import { Container, Button } from "@/components/ui";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Wind,
  Zap,
  Gauge,
  Sparkles,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { AnimateDiv } from "@/components/common/Animate";
import { ArrowRightIcon } from "@/components/icons";
import Image from "next/image";

interface ServicePackage {
  id: string;
  icon: React.ReactNode;
  name: string;
  duration: string;
  description: string;
  prices: {
    s: number;
    m: number;
    l: number;
  };
  features: string[];
  highlight?: boolean;
}

interface ServiceCardProps {
  path: string;
  title: string;
  description: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  path,
  title,
  description,
}) => {
  const link = `/service/${title.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <Link
      href={link}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
    >
      <AnimateDiv
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          },
        }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
        className="relative rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden"
      >
        {/* Background gradient - Disabled on mobile */}
        <AnimateDiv
          className={`absolute inset-0 bg-gradient-to-br primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 hidden sm:block`}
        />

        {/* Nội dung */}
        <div>
          <Image
            src={"/favicon.png"}
            alt={title}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
            quality={75}
          />

          <div className="relative z-10 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>

            <p className="text-foreground/60 leading-relaxed mb-4">
              {description}
            </p>

            {/* CTA text (nằm trong link luôn) */}
            <div className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:ml-1 transition-all duration-300">
              <span className="sr-only">Learn more about {title}</span>
              <span aria-hidden="true">Learn more</span>
              <ArrowRightIcon className="w-5 h-5 [&_path]:stroke-primary" />
            </div>
          </div>
        </div>
      </AnimateDiv>
    </Link>
  );
};

const ServicesOverview = () => {
  const services: ServicePackage[] = [
    {
      id: "mini",
      icon: <Wind className="w-8 h-8" />,
      name: "Mini Package",
      duration: "1 - 1.5 hrs",
      description: "Light cleaning & maintenance",
      prices: { s: 90, m: 110, l: 130 },
      features: [
        "Exterior wash & dry",
        "Interior vacuum",
        "Windows clean",
        "Quick tidy-up",
      ],
    },
    {
      id: "interior",
      icon: <Sparkles className="w-8 h-8" />,
      name: "Interior Package",
      duration: "1.5 - 2.5 hrs",
      description: "Deep interior shampoo & deodorise",
      prices: { s: 140, m: 160, l: 190 },
      features: [
        "Deep interior vacuum",
        "Seat shampoo & protect",
        "Dashboard detail",
        "Odour elimination",
        "Air freshener",
      ],
    },
    {
      id: "full-detail",
      icon: <Gauge className="w-8 h-8" />,
      name: "Full Detail Package",
      duration: "2.5 - 3.5 hrs",
      description: "Complete in-out detailing",
      prices: { s: 230, m: 260, l: 290 },
      features: [
        "Complete exterior detail",
        "Deep interior cleaning",
        "Paint protection",
        "Tyre dressing",
        "Engine bay wipe",
      ],
      highlight: true,
    },
    {
      id: "enhancement",
      icon: <Zap className="w-8 h-8" />,
      name: "Enhancement Package",
      duration: "4 - 5.5 hrs",
      description: "Polishing, paint decontamination",
      prices: { s: 350, m: 390, l: 450 },
      features: [
        "Paint decontamination",
        "Professional polishing",
        "Deep interior detail",
        "Headlight restoration",
        "Premium coating",
      ],
    },
  ];

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle title="Our Services" variants={itemVariants} />
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Tailored Detailing Solutions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            From quick touch-ups to complete transformations, we have the
            perfect package for your car.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group relative rounded-2xl  transition-all duration-300 cursor-pointer ${
                service.highlight
                  ? "bg-gradient-to-br from-primary/20 to-accent/20  shadow-lg lg:scale-105"
                  : "bg-card  hover:shadow-lg"
              }`}
              whileHover={{ y: -8 }}
            >
              <ServiceCard
                path={"/favicon.png"}
                title={service.name}
                description={service.description}
              />
            </motion.div>
          ))}

          {/* {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`group relative rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                service.highlight
                  ? "bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 shadow-lg lg:scale-105"
                  : "bg-card border border-primary/20 hover:border-primary/50 hover:shadow-lg"
              }`}
              whileHover={{ y: -8 }}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-4 p-3 bg-primary/20 rounded-lg w-fit group-hover:bg-primary/30 transition-colors">
                <div className="text-primary">{service.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-foreground/60 mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {service.duration}
              </p>
              <p className="text-sm text-foreground/70 mb-6">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                {service.features.length > 3 && (
                  <p className="text-sm text-primary font-medium">
                    + {service.features.length - 3} more features
                  </p>
                )}
              </div>

              <div className="mb-6 pb-6 border-t border-primary/20">
                <p className="text-xs text-foreground/50 uppercase mb-2">
                  Starting from
                </p>
                <div className="space-y-1">
                  <p className="text-sm text-foreground/70">
                    <span className="font-semibold">${service.prices.s}</span>{" "}
                    (Small) |{" "}
                    <span className="font-semibold">${service.prices.m}</span>{" "}
                    (Medium) |{" "}
                    <span className="font-semibold">${service.prices.l}</span>{" "}
                    (Large)
                  </p>
                </div>
              </div>

              <Link href="/booking" className="w-full">
                <Button
                  className={`w-full font-semibold rounded-lg transition-all ${
                    service.highlight
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                  }`}
                >
                  Book Package
                </Button>
              </Link>
            </motion.div>
          ))} */}
        </motion.div>

        {/* Extensions Section */}
        <motion.div
          className="bg-card border border-primary/20 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">
                  Extension Options
                </h3>
              </div>
              <p className="text-foreground/70 mb-6">
                Add premium enhancements to any package for an extra shine.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Engine Bay Detail", price: "$30-40" },
                { name: "Headlight Restoration", price: "$40-50" },
                { name: "Pet Hair Removal", price: "$30-40" },
                { name: "Sticker Removal", price: "$20-30" },
              ].map((ext, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background rounded-lg border border-primary/20"
                >
                  <p className="font-semibold text-foreground text-sm mb-1">
                    {ext.name}
                  </p>
                  <p className="text-accent font-bold">{ext.price}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/70 mb-4">
            Ceramic Coating Package available upon quote
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg"
            >
              Get Your Quote Now
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServicesOverview;
