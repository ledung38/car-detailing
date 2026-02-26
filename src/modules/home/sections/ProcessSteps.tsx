import { Container } from "@/components/ui";
import { motion } from "motion/react";
import { CheckCircle2, Clock, MapPin, Smartphone } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";

interface ProcessStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessSteps = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      icon: <Smartphone className="w-8 h-8" />,
      title: "Book Online",
      description:
        "Select your service, car size, and preferred time. It takes just 2 minutes.",
    },
    {
      number: 2,
      icon: <Clock className="w-8 h-8" />,
      title: "Choose Your Time",
      description:
        "Pick a convenient slot. We're available Monday-Sunday, 8AM-6PM across Sydney.",
    },
    {
      number: 3,
      icon: <MapPin className="w-8 h-8" />,
      title: "We Come to You",
      description:
        "Our expert detailer arrives with all equipment. Professional work starts right away.",
    },
    {
      number: 4,
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Enjoy Results",
      description:
        "Pay only when satisfied. Take pride in your spotless, shining car.",
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
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants} title="Simple & Easy" />

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            How It Works
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Booking professional car detailing has never been easier. Follow our
            simple 4-step process.
          </motion.p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Step Card */}
              <div className="h-full p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-6 p-4 bg-primary/20 rounded-xl w-fit group-hover:bg-primary/30 transition-colors">
                  <div className="text-primary">{step.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Features Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-y border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            {
              title: "Fast & Efficient",
              description:
                "Booking takes 2 minutes. Services start right on time.",
            },
            {
              title: "Transparent Pricing",
              description:
                "No hidden fees. Fixed prices based on your car size.",
            },
            {
              title: "Satisfaction First",
              description: "Pay only when satisfied with the results.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Car?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Booking is simple, fast, and secure. Start the process right now.
          </p>
          <a
            href="/booking"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all"
          >
            Book Your Service
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProcessSteps;
