import {
  AnimateA,
  AnimateDiv,
  AnimateH1,
  AnimateP,
} from "@/components/common/Animate";
import SectionTitle from "@/components/common/SectionTitle";
import { TextGradient } from "@/components/common/TextGradient";
import { Container } from "@/components/ui";
import aboutUsImg from "@/lib/assets/images/about-us/vision.png";
import ceramicCoatingImg from "@/lib/assets/images/ceramic-coating-package.png";
import { Routes } from "@/lib/enum/routes";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  Star,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
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
  } as const;

  // Stats for achievements
  const stats = [
    { number: "500+", label: "Satisfied Customers", icon: Users },
    { number: "1000+", label: "Cars Detailed", icon: Award },
    { number: "5★", label: "Average Rating", icon: Star },
    { number: "5+", label: "Years Service", icon: Clock },
  ];

  // Service Process steps
  const processSteps = [
    {
      step: 1,
      title: "Book Online",
      description: "Simple 2-minute booking through our website",
      icon: "📱",
    },
    {
      step: 2,
      title: "Choose Your Time",
      description: "Select convenient time slot, 8AM-6PM, Mon-Sun",
      icon: "⏰",
    },
    {
      step: 3,
      title: "We Come To You",
      description: "Our expert team arrives with all premium products",
      icon: "🚗",
    },
    {
      step: 4,
      title: "Enjoy Results",
      description: "Pay only when completely satisfied with quality",
      icon: "✨",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section - Who We Are with Video Background */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* background image  */}
          <Image
            src="/about-us-bg.png"
            width={1920}
            height={1080}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              filter: "brightness(0.4)",
            }}
            priority
          />
        </div>

        <Container>
          <AnimateDiv
            className="space-y-8 text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <SectionTitle title="Who We Are" />

            <AnimateH1
              variants={itemVariants}
              className="text-5xl md:text-6xl  font-bold text-white leading-tight"
            >
              Premier Mobile Car{" "}
              <TextGradient as={"span"}>Detailing Service</TextGradient>
            </AnimateH1>

            <AnimateP
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Transforming vehicles into showroom-fresh masterpieces. We bring
              professional, premium car detailing directly to your location
              across Sydney.
            </AnimateP>

            {/* Stats Grid */}
            <AnimateDiv
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <AnimateDiv
                    key={index}
                    variants={itemVariants}
                    className="bg-white/10 border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <IconComponent className="size-6 text-primary mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </AnimateDiv>
                );
              })}
            </AnimateDiv>

            {/* CTA Button */}
            <AnimateDiv variants={itemVariants} className="pt-6">
              <Link
                href={Routes.BOOKING}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors text-lg"
              >
                Book Your Service
                <ArrowRight className="size-5" />
              </Link>
            </AnimateDiv>
          </AnimateDiv>
        </Container>
      </section>

      {/* Mission & Vision Section - Based on UI Design */}
      <section className="relative  overflow-hidden  py-25 bg-primary/5">
        {/* VISION Section */}
        <div className="relative flex items-center overflow-hidden ">
          <Container className="w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Vision Content */}
              <AnimateDiv
                className="space-y-6 z-10 ml-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* <motion.h2 variants={itemVariants}> */}
                <SectionTitle
                  title="Vision"
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold text-primary leading-tight italic "
                />

                {/* </motion.h2> */}
                <AnimateP
                  variants={itemVariants}
                  className="text-lg text-foreground leading-relaxed"
                >
                  {`To become Sydney's most trusted and preferred car detailing
                  service, recognized for exceptional quality, customer care,
                  and environmental responsibility. We envision a future where
                  every car owner has access to professional detailing at their
                  convenience.`}
                </AnimateP>

                <AnimateDiv variants={itemVariants} className="space-y-3 pt-4">
                  {[
                    "Excellence in every detail",
                    "Customer satisfaction guaranteed",
                    "Innovation in service delivery",
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <CheckCircle2 className="size-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </AnimateDiv>
              </AnimateDiv>

              {/* Vision Image */}
              <AnimateDiv
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative h-96 md:h-full hidden md:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden ">
                  <Image
                    src={aboutUsImg}
                    alt="Vision"
                    fill
                    className="object-cover object-right"
                  />
                </div>
              </AnimateDiv>
            </div>
          </Container>
        </div>

        {/* MISSION Section */}
        <div className="relative  flex items-center overflow-hidden  pt-12">
          <Container className="w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Mission Image */}
              <AnimateDiv
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative h-96 md:h-full hidden md:block md:order-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
                  <Image
                    src={ceramicCoatingImg}
                    alt="Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimateDiv>

              {/* Mission Content */}
              <AnimateDiv
                className="space-y-6 z-10 md:order-2 mr-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SectionTitle
                  title="Mission"
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold text-primary leading-tight italic "
                />
                <AnimateP
                  variants={itemVariants}
                  className="text-lg text-foreground leading-relaxed"
                >
                  {`To revolutionize car care by bringing professional, premium
                  detailing directly to customers' homes, making car maintenance
                  convenient, affordable, and environmentally responsible while
                  setting new standards of excellence.`}
                </AnimateP>

                <AnimateDiv variants={itemVariants} className="space-y-3 pt-4">
                  {[
                    "Premium products for superior results",
                    "Eco-friendly, sustainable practices",
                    "Professional certified detailers",
                  ].map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <CheckCircle2 className="size-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </AnimateDiv>
              </AnimateDiv>
            </div>
          </Container>
        </div>
      </section>

      {/* Our Service Process Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-background to-primary/60">
        <Container>
          <AnimateDiv
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimateDiv variants={itemVariants} className="text-center">
              <SectionTitle
                title="Our Service Process"
                variants={itemVariants}
              />
              <p className="text-lg text-foreground max-w-2xl mx-auto mt-4">
                Simple, transparent, and convenient. Experience hassle-free car
                detailing in just 4 steps.
              </p>
            </AnimateDiv>

            {/* Process Steps */}
            <AnimateDiv
              className="grid md:grid-cols-4 gap-6 relative"
              variants={containerVariants}
            >
              {processSteps.map((process, index) => (
                <AnimateDiv
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="bg-primary/20 border-2 border-blue-200 rounded-xl p-8 text-center hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-4 border-white mb-4 relative -mt-12 shadow-md">
                      <span className="text-2xl font-bold text-white">
                        {process.step}
                      </span>
                    </div>

                    {/* Step Icon */}
                    <div className="text-4xl mb-4">{process.icon}</div>

                    {/* Step Title */}
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      {process.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-foreground leading-relaxed text-sm">
                      {process.description}
                    </p>
                  </div>
                </AnimateDiv>
              ))}
            </AnimateDiv>
          </AnimateDiv>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-primary/60  to-background">
        <Container>
          <AnimateDiv
            className="max-w-3xl mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimateDiv variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {`Ready for Your Car's `}
                <TextGradient as={"span"}>Transformation?</TextGradient>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {`Book your premium car detailing service today. We're just one
                click away from making your vehicle showroom-perfect.`}
              </p>
            </AnimateDiv>

            {/* CTA Buttons */}
            <AnimateDiv
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <AnimateDiv variants={itemVariants}>
                <Link
                  href={Routes.BOOKING}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-colors"
                >
                  Book Now
                  <ArrowRight className="size-5" />
                </Link>
              </AnimateDiv>

              <AnimateDiv variants={itemVariants}>
                <Link
                  href={`${Routes.SERVICE}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-card border border-primary/50 hover:bg-primary/10 text-foreground font-semibold transition-colors"
                >
                  View Services
                  <ArrowRight className="size-5" />
                </Link>
              </AnimateDiv>
            </AnimateDiv>

            {/* Quick Contact Info */}
            <AnimateDiv
              variants={containerVariants}
              className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <AnimateA
                variants={itemVariants}
                href="tel:0433263105"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Zap className="size-6 text-primary" />
                <span className="font-semibold text-foreground">
                  0433 263 105
                </span>
                <span className="text-sm text-foreground/60">Call anytime</span>
              </AnimateA>

              <AnimateA
                variants={itemVariants}
                href="mailto:skynicecardetailing102@gmail.com"
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Heart className="size-6 text-primary" />
                <span className="font-semibold text-foreground text-sm">
                  Email Us
                </span>
                <span className="text-sm text-foreground/60 break-all">
                  skynicecardetailing102@gmail.com
                </span>
              </AnimateA>

              <AnimateDiv
                variants={itemVariants}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <MapPin className="size-6 text-primary" />
                <span className="font-semibold text-foreground">
                  All Sydney
                </span>
                <span className="text-sm text-foreground/60">
                  NSW, Australia
                </span>
              </AnimateDiv>
            </AnimateDiv>
          </AnimateDiv>
        </Container>
      </section>
    </main>
  );
};

export default AboutUs;
