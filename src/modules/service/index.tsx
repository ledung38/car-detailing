"use client";
import { Container } from "@/components/ui";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Clock, CheckCircle2, AlertCircle, Zap } from "lucide-react";
import SectionTitle from "@/components/common/SectionTitle";
import { ArrowRightIcon, CheckIcon, TickIcon } from "@/components/icons";
import { Routes } from "@/lib/enum/routes";
import { SERVICES } from "@/modules/service/contants";
import extensionDetailImg from "@/lib/assets/images/extension-detail.png";
import { cn } from "@/lib/utils";

interface ServiceComponentProps {
  data: {
    id: string;
    title: string;
    slug: string;
    avatar: any;
    duration: string;
    priceRange: string;
    description: string;
    highlights: string[];
  };
  slug: string;
}

const ServiceComponent = ({ data, slug }: ServiceComponentProps) => {
  // Get extension options (always the last item in SERVICES)
  const extensionOptions = SERVICES[SERVICES.length - 1];

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const extractPrices = (priceRange: string) => {
    const parts = priceRange.split("|");
    return {
      S: parts[0]?.match(/\$(\d+)/)?.[1] || "Contact",
      M: parts[1]?.match(/\$(\d+)/)?.[1] || "Contact",
      L: parts[2]?.match(/\$(\d+)/)?.[1] || "Contact",
    };
  };

  const prices = extractPrices(data.priceRange);

  // Get related services (excluding current and extension detail)
  const relatedServices = SERVICES.filter(
    (s) => s.slug !== slug && s.slug !== "extension-detail",
  ).slice(0, 3);

  return (
    <main className="w-full">
      {/* Hero Section with Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={data.avatar}
          alt={data.title}
          fill
          className="object-cover"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <Container>
          <motion.div
            className="absolute inset-x-0 bottom-0 p-6 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="Service Detail" variants={itemVariants} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4">
              {data.title}
            </h1>
          </motion.div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-8 md:py-12 border-b border-border/40">
        <Container>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {data.description}
                </p>
              </div>

              {/* Details Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <Clock className="w-6 h-6 text-primary mb-2" />
                  <p className="text-sm text-foreground/60 mb-1">Duration</p>
                  <p className="font-semibold text-foreground">
                    {data.duration}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <Zap className="w-6 h-6 text-accent mb-2" />
                  <p className="text-sm text-foreground/60 mb-1">Premium</p>
                  <p className="font-semibold text-foreground">Quality</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Pricing */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-gradient-to-br from-card to-card/50 border border-primary/30 p-8 sticky top-24"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Pricing
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg bg-background/50 border border-border/40">
                  <p className="text-xs uppercase text-foreground/50 mb-2 font-semibold">
                    Small
                  </p>
                  <p className="text-3xl font-bold text-primary">${prices.S}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50 border border-primary/50 ring-1 ring-primary/30">
                  <p className="text-xs uppercase text-foreground/50 mb-2 font-semibold">
                    Medium
                  </p>
                  <p className="text-3xl font-bold text-primary">${prices.M}</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-background/50 border border-border/40">
                  <p className="text-xs uppercase text-foreground/50 mb-2 font-semibold">
                    Large
                  </p>
                  <p className="text-3xl font-bold text-primary">${prices.L}</p>
                </div>
              </div>

              <Link href={Routes.BOOKING} className="w-full block">
                <button className="w-full py-4 px-6 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Book Now</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <p className="text-sm text-foreground/50 mb-4 text-center mt-4 italic">
                *Prices are for reference only and may vary depending on vehicle
                condition.
              </p>

              <p className="text-xs text-foreground/60 text-center mt-4">
                ✓ Mobile service • ✓ No hidden fees • ✓ Money back guarantee
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="py-8 sm:py-12 bg-card/30 border-b border-border/40">
        <Container className="grid grid-cols-2 items-center">
          <motion.div
            className=" col-span-1 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <SectionTitle title="What's Included" variants={itemVariants} />
              <h2 className="text-4xl font-bold text-foreground mt-4">
                Complete Service Package
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-300"
                >
                  <TickIcon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-lg leading-relaxed">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-span-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <video
                src="https://www.facebook.com/share/r/17opsnzCED/?mibextid=wwXIfr"
                controls
                autoPlay
                muted
                playsInline
                className={cn(
                  "w-full h-140 object-cover rounded-2xl brightness-125",
                )}
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Extension Options Section */}
      <section className="py-16 md:py-24 border-b border-border/40">
        <Container>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 rounded-2xl overflow-hidden border border-border/40"
            >
              <Image
                src={extensionDetailImg}
                alt="Extension Details"
                fill
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <SectionTitle title="Premium Add-ons" variants={itemVariants} />
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                  Enhance Your Service
                </h3>
                <p className="text-lg text-foreground/70">
                  Customize your detailing package with our premium add-on
                  services. Perfect for specific needs or heavy cleaning
                  requirements.
                </p>
              </div>

              {/* Extension Options Grid */}
              <div className="grid grid-cols-1 gap-4">
                {extensionOptions.highlights.map((option, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/40 hover:border-accent/50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckIcon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        {option}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Section */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent border-b border-border/40">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <SectionTitle title="Why Choose Us" variants={itemVariants} />
              <h2 className="text-4xl font-bold text-foreground mt-4">
                Premium Service, Trusted Expertise
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Professionals",
                  desc: "Certified detailers with 5+ years experience",
                },
                {
                  title: "Premium Products",
                  desc: "Top-tier detailing products for best results",
                },
                {
                  title: "Mobile Convenience",
                  desc: "We come to you, save time and hassle",
                },
                {
                  title: "Transparent Pricing",
                  desc: "No hidden fees, upfront quotes",
                },
                {
                  title: "Satisfaction Guaranteed",
                  desc: "100% money-back guarantee",
                },
                {
                  title: "Eco-Friendly",
                  desc: "100% biodegradable products",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-card border border-border/40 hover:border-primary/50 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section> */}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SectionTitle title="Related Services" variants={itemVariants} />
              <h2 className="text-4xl font-bold text-foreground mt-4">
                You Might Also Like
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {relatedServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={`/service/${service.slug}`}
                    className="block h-full"
                  >
                    <div className="relative rounded-xl overflow-hidden h-80 border border-border/40 hover:border-primary/50 transition-all duration-300">
                      <Image
                        src={service.avatar}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-foreground/70 mt-2 line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/30 to-accent/30 border-t border-border/40">
        <Container>
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ready to Shine?
              </h2>
              <p className="text-xl text-foreground/70">
                Book your {data.title.toLowerCase()} today and experience the
                difference
              </p>
            </div>

            <Link href={Routes.BOOKING}>
              <button className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group mx-auto">
                <span>Get Instant Quote</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </main>
  );
};

export default ServiceComponent;
