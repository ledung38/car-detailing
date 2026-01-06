"use client";
import { Container } from "@/components/ui";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface BeforeAfterItem {
  id: string;
  title: string;
  type: string;
  beforeText: string;
  afterText: string;
}

const BeforeAfterGallery = () => {
  const gallery: BeforeAfterItem[] = [
    {
      id: "1",
      title: "Complete Transformation",
      type: "Full Detail Package",
      beforeText: "Heavy dust & water spots",
      afterText: "Mirror-like finish",
    },
    {
      id: "2",
      title: "Deep Interior Clean",
      type: "Interior Package",
      beforeText: "Dirty upholstery & stains",
      afterText: "Pristine & fresh interior",
    },
    {
      id: "3",
      title: "Paint Restoration",
      type: "Enhancement Package",
      beforeText: "Swirl marks & oxidation",
      afterText: "Professional polish shine",
    },
    {
      id: "4",
      title: "Quick Detail",
      type: "Mini Package",
      beforeText: "Daily grime buildup",
      afterText: "Fresh & clean exterior",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-40" />
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
            Results You Can See
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-foreground"
          >
            Before & After Gallery
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            See the dramatic transformation we deliver on every car, from quick
            maintenance to complete restorations.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {gallery.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              {/* Container */}
              <div className="relative h-96 bg-card border border-primary/20 rounded-2xl overflow-hidden">
                {/* Before/After Slider Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {/* Placeholder for Images */}
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                      {/* Before Side */}
                      <div className="bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col items-center justify-center p-6 relative border-r border-primary/30">
                        <div className="w-16 h-16 bg-slate-800 rounded-full mb-4 flex items-center justify-center">
                          <span className="text-3xl">🚗</span>
                        </div>
                        <p className="font-semibold text-foreground text-sm">
                          Before
                        </p>
                        <p className="text-xs text-foreground/60 mt-2 text-center">
                          {item.beforeText}
                        </p>
                      </div>

                      {/* After Side */}
                      <div className="bg-gradient-to-br from-primary/30 to-accent/20 flex flex-col items-center justify-center p-6">
                        <div className="w-16 h-16 bg-primary/40 rounded-full mb-4 flex items-center justify-center ring-2 ring-primary/50">
                          <span className="text-3xl">✨</span>
                        </div>
                        <p className="font-semibold text-foreground text-sm">
                          After
                        </p>
                        <p className="text-xs text-foreground/60 mt-2 text-center">
                          {item.afterText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-2">
                    <p className="text-xs text-primary font-semibold uppercase">
                      {item.type}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  {/* View Gallery Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                    <div className="p-2 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30 group-hover:bg-primary/30 transition-colors">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: "1000+", label: "Cars Detailed" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-card border border-primary/20 text-center hover:border-primary/50 transition-colors"
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Want to See More?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Check out our complete gallery of transformations on Instagram
            @SkyNice_Detailing to see more amazing before & after results.
          </p>
          <a
            href="https://www.instagram.com/SkyNice_Detailing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all"
          >
            View Full Gallery
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default BeforeAfterGallery;
