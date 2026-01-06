"use client";
import { Container } from "@/components/ui";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openId, setOpenId] = useState<string>("1");

  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "How do I book a service?",
      answer:
        "Booking is simple! Visit our booking page, select your car size, preferred service package, and choose a time slot that works for you. You'll receive a confirmation email with all details. It takes just 2-3 minutes.",
    },
    {
      id: "2",
      question: "What areas do you service?",
      answer:
        "We service all of Sydney and surrounding suburbs (NSW, Australia). Simply enter your address during booking to confirm availability. If your location is within Sydney, we can schedule a service for you.",
    },
    {
      id: "3",
      question: "What if I'm not satisfied with the service?",
      answer:
        "Your satisfaction is guaranteed. If you're not completely happy with the results, we'll rework the service at no additional charge. We stand behind our work 100%.",
    },
    {
      id: "4",
      question: "What's included in the Full Detail Package?",
      answer:
        "The Full Detail Package (2.5-3.5 hours) includes complete exterior detailing, deep interior cleaning, paint protection treatment, tyre dressing, and engine bay wiping. Perfect for a complete transformation.",
    },
    {
      id: "5",
      question: "Do you use eco-friendly products?",
      answer:
        "Yes! All our detailing products are 100% biodegradable and eco-friendly. They're safe for your car's paint, interior, and the environment. We're committed to responsible car care.",
    },
    {
      id: "6",
      question: "What's your availability?",
      answer:
        "We're available Monday to Sunday, 8:00 AM to 6:00 PM. You can book any time during these hours. Weekend appointments are available and welcome.",
    },
    {
      id: "7",
      question: "Can I add extra services to my package?",
      answer:
        "Absolutely! We offer extension options like engine bay detail, headlight restoration, pet hair removal, and sticker removal. These can be added to any package for $20-50 depending on the service.",
    },
    {
      id: "8",
      question: "How long does the ceramic coating last?",
      answer:
        "Ceramic coating typically lasts 6-24 months depending on maintenance and environmental conditions. We'll provide care instructions to maximize its longevity. For pricing and details, contact us for a personalized quote.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-40 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
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
            Got Questions?
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, booking
            process, and more.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="border border-primary/20 rounded-xl overflow-hidden bg-card hover:border-primary/50 transition-colors"
            >
              {/* Question */}
              <button
                onClick={() => setOpenId(openId === faq.id ? "" : faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-primary/20 bg-background/50">
                  <p className="text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Can't Find Your Answer?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Reach out to our team directly. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0433263105"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all"
            >
              Call: 0433 263 105
            </a>
            <a
              href="mailto:skynicecardetailing102@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-semibold rounded-lg transition-all"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;
