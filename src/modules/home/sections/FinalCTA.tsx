"use client";
import { Container, Button } from "@/components/ui";
import { motion } from "motion/react";
import Link from "next/link";
import { Phone, MapPin, Mail, CheckCircle2, Zap } from "lucide-react";

const FinalCTA = () => {
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      </div>

      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main Heading */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
              Ready for a{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Spotless Car?
              </span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Join over 500 happy customers who've already experienced the SKY
              NICE difference. Book your professional detailing today.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Zap, label: "2 Min Booking" },
              { icon: CheckCircle2, label: "100% Satisfaction" },
              { icon: MapPin, label: "All Sydney" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center justify-center gap-3 p-4 rounded-lg bg-card border border-primary/20"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/booking" className="w-full sm:w-auto">
              <Button className="w-full h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
                Book Now
              </Button>
            </Link>
            <a href="tel:0433263105" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full h-14 border-2 border-primary/50 text-foreground hover:bg-primary/10 font-bold rounded-lg text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: 0433 263 105
              </Button>
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary/20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "0433 263 105",
                href: "tel:0433263105",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "skynicecardetailing102@gmail.com",
                href: "mailto:skynicecardetailing102@gmail.com",
              },
              {
                icon: MapPin,
                label: "Service Area",
                value: "All of Sydney, NSW",
                href: "https://maps.app.goo.gl/Zj9SkChrEE7eZX8T9",
              },
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    contact.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-card border border-primary/20 hover:border-primary/50 transition-all hover:shadow-md group"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="w-6 h-6 text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-foreground/60 mb-2">
                    {contact.label}
                  </p>
                  <p className="font-semibold text-foreground">
                    {contact.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Hours Info */}
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-foreground mb-2">
              Available Hours
            </h3>
            <p className="text-lg text-foreground/80 font-semibold">
              Monday – Sunday: 8:00 AM – 6:00 PM
            </p>
            <p className="text-sm text-foreground/60 mt-2">
              Weekend appointments available. Same-day booking available in many
              areas.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <p className="text-foreground/70">
              Follow us for before & after galleries and detailing tips
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/sky.nice.car.detailing",
                  emoji: "f",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/SkyNice_Detailing/",
                  emoji: "📷",
                },
                {
                  name: "TikTok",
                  url: "https://www.tiktok.com/sky_nice_car_detailing",
                  emoji: "🎵",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-card border border-primary/30 hover:border-primary/50 hover:bg-primary/10 text-foreground font-medium transition-all hover:scale-105 inline-flex items-center gap-2"
                >
                  <span>{social.emoji}</span>
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Closing Message */}
          <motion.p
            className="text-lg text-foreground/70 italic"
            variants={itemVariants}
          >
            "We bring professional-grade car care to your doorstep — saving you
            time, protecting your car, and giving it that brand-new shine
            again."
          </motion.p>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="pt-4">
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-6 rounded-lg"
              >
                Start Your Booking
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default FinalCTA;
