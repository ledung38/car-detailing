"use client";
import { Container } from "@/components/ui";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  car: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "John Anderson",
      role: "Sydney, NSW",
      car: "Tesla Model 3",
      content:
        "Amazing service! David was professional, punctual, and my car looks brand new. The attention to detail is incredible. Highly recommend SKY NICE!",
      rating: 5,
    },
    {
      id: "2",
      name: "Sarah Mitchell",
      role: "Sydney, NSW",
      car: "BMW X5",
      content:
        "Absolutely impressed with the quality. The interior cleaning was thorough and the exterior shine is perfect. Will definitely book again!",
      rating: 5,
    },
    {
      id: "3",
      name: "Michael Chen",
      role: "Sydney, NSW",
      car: "Audi A4",
      content:
        "Best car detailing service I've used. They came right on time, did excellent work, and the pricing is fair. Very happy customer here.",
      rating: 5,
    },
    {
      id: "4",
      name: "Emma Williams",
      role: "Sydney, NSW",
      car: "Mercedes C-Class",
      content:
        "Professional, reliable, and thorough. My car has never looked better. The team at SKY NICE knows what they're doing. Highly recommended!",
      rating: 5,
    },
    {
      id: "5",
      name: "David Thompson",
      role: "Sydney, NSW",
      car: "Range Rover",
      content:
        "Exceptional service quality. The ceramic coating package was worth every penny. My car looks showroom fresh. 10/10 would recommend!",
      rating: 5,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-30" />
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
            Customer Testimonials
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Loved by Our Clients
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            Real feedback from real customers who've experienced our premium
            detailing service.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="mb-4">{renderStars(testimonial.rating)}</div>

              {/* Content */}
              <p className="text-foreground/70 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-primary/20">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.car}</p>
                <p className="text-xs text-foreground/50 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-8 lg:px-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: "500+", label: "Happy Clients", icon: "😊" },
            { number: "99%", label: "Satisfaction Rate", icon: "⭐" },
            { number: "5★", label: "Average Rating", icon: "🏆" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-5xl mb-2">{stat.icon}</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.number}
              </p>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-card border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Follow Us & See More
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Check out our Instagram @SkyNice_Detailing for more customer
              reviews, before & after galleries, and exclusive detailing tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="https://www.instagram.com/SkyNice_Detailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.facebook.com/sky.nice.car.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-semibold rounded-lg transition-all"
              >
                Like on Facebook
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
