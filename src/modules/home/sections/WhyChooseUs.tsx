"use client";
import { Container } from "@/components/ui";
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

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const benefits: BenefitCard[] = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Mobile Convenience",
      description:
        "We come to you. No need to drive to a garage, just relax while we detail your car at home.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professional Grade",
      description:
        "Certified detailers with 5+ years experience using premium products and latest techniques.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      description:
        "Pay only after you're satisfied. Your happiness is our priority and guarantee.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Eco-Friendly",
      description:
        "100% biodegradable products that are safe for your car and the environment.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description:
        "Book at your convenience. Monday to Sunday, 8AM to 6PM. Weekend appointments welcome.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
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
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-40 -translate-y-1/2" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-primary font-semibold"
          >
            Why SKY NICE
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Premium Care, Your Way
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            We're not just detailers—we're car care partners committed to
            delivering excellence, every time.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              {/* Icon Background */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                <div className="text-primary">{benefit.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>

              {/* Check Icon Accent */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 rounded-2xl border border-primary/20 px-8 lg:px-12 bg-gradient-to-br from-primary/5 to-accent/5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold mb-2">Built on Trust</p>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                Trusted by Sydney's Best
              </h3>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Over 500 happy customers and 1000+ cars detailed. We've earned our
              reputation through consistent quality, professional service, and
              unwavering commitment to customer satisfaction.
            </p>

            <div className="space-y-3">
              {[
                "100% Satisfaction Guarantee",
                "Certified Detailers & Products",
                "5-Star Rated Service",
                "Fully Insured & Licensed",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
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
              { number: "8AM-6PM", label: "Work Hours", icon: Clock },
            ].map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl bg-background border border-primary/20 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-3 bg-primary/20 rounded-lg w-fit mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Process Highlight */}
        <motion.div
          className="mt-12 p-8 lg:p-12 bg-card rounded-2xl border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Our Promise to You
          </h3>
          <div className="space-y-4">
            <p className="text-foreground/70 leading-relaxed">
              <span className="text-primary font-semibold">
                Professional Excellence:
              </span>{" "}
              Every team member is certified with 5+ years of experience in
              premium car detailing.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              <span className="text-accent font-semibold">
                Quality Guarantee:
              </span>{" "}
              If you're not completely satisfied, we'll rework at no charge.
            </p>
            <p className="text-foreground/70 leading-relaxed">
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
