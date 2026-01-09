"use client";
import { Container } from "@/components/ui";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import SectionTitle from "@/components/common/SectionTitle";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  type: string;
}

interface BeforeAfterItem {
  id: string;
  title: string;
  type: string;
  beforeText: string;
  afterText: string;
}

const BeforeAfterGallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Gallery data structure - prepared for actual image URLs
  const galleryData: GalleryImage[] = [
    // Column 1
    {
      id: "1-1",
      src: "/images/gallery/col1-img1.jpg",
      alt: "Car before full detail package - heavy dust and water spots",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "1-2",
      src: "/images/gallery/col1-img2.jpg",
      alt: "Car after full detail package - mirror-like finish",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "1-3",
      src: "/images/gallery/col1-img3.jpg",
      alt: "Car interior before cleaning - dirty upholstery",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },
    {
      id: "1-4",
      src: "/images/gallery/col1-img4.jpg",
      alt: "Car interior after cleaning - pristine interior",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },

    // Column 2
    {
      id: "2-1",
      src: "/images/gallery/col2-img1.jpg",
      alt: "Paint before restoration - swirl marks and oxidation",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "2-2",
      src: "/images/gallery/col2-img2.jpg",
      alt: "Paint after restoration - professional polish shine",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "2-3",
      src: "/images/gallery/col2-img3.jpg",
      alt: "Car exterior before quick detail - daily grime buildup",
      title: "Quick Detail",
      type: "Mini Package",
    },
    {
      id: "2-4",
      src: "/images/gallery/col2-img4.jpg",
      alt: "Car exterior after quick detail - fresh and clean",
      title: "Quick Detail",
      type: "Mini Package",
    },

    // Column 3
    {
      id: "3-1",
      src: "/images/gallery/col3-img1.jpg",
      alt: "Luxury vehicle before detailing service",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "3-2",
      src: "/images/gallery/col3-img2.jpg",
      alt: "Luxury vehicle after detailing - professional results",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "3-3",
      src: "/images/gallery/col3-img3.jpg",
      alt: "Red car interior before cleaning service",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },
    {
      id: "3-4",
      src: "/images/gallery/col3-img4.jpg",
      alt: "Red car interior after cleaning - pristine condition",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },

    // Column 4
    {
      id: "4-1",
      src: "/images/gallery/col4-img1.jpg",
      alt: "Vehicle body before paint correction and polish",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "4-2",
      src: "/images/gallery/col4-img2.jpg",
      alt: "Vehicle body after paint correction - gleaming finish",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "4-3",
      src: "/images/gallery/col4-img3.jpg",
      alt: "Car undercarriage before detailing",
      title: "Quick Detail",
      type: "Mini Package",
    },
    {
      id: "4-4",
      src: "/images/gallery/col4-img4.jpg",
      alt: "Car undercarriage after detailing - clean and fresh",
      title: "Quick Detail",
      type: "Mini Package",
    },
  ];

  // Organize images by columns
  const columnedGallery = useMemo(() => {
    const columns = [[], [], [], []] as GalleryImage[][];
    galleryData.forEach((img, idx) => {
      const columnIndex = Math.floor(idx / 4);
      columns[columnIndex]?.push(img);
    });
    return columns;
  }, []);

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
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      </div>

      <Container className="bg-background rounded-4xl py-10">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle variants={itemVariants} title="Results You Can See" />

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

        {/* Gallery Grid Container */}
        <div className="relative mb-12">
          {!isExpanded && (
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
          )}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {columnedGallery.map((column, colIndex) => (
              <motion.div
                key={`gallery-col-${colIndex}`}
                className="relative flex flex-col gap-3 overflow-hidden"
                variants={itemVariants}
              >
                {/* Gallery Images */}
                <div
                  className={`flex flex-col gap-3 transition-all duration-500 ${
                    isExpanded ? "max-h-none" : "max-h-[1000px] overflow-hidden"
                  }`}
                >
                  {column.map((image) => (
                    <motion.article
                      key={image.id}
                      className="relative overflow-hidden rounded-lg bg-muted aspect-square flex-shrink-0 group"
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                      />
                      {/* Image Overlay - Semantic Info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <div className="text-white text-xs line-clamp-2">
                          <p className="font-semibold">{image.title}</p>
                          <p className="text-white/80">{image.type}</p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={`flex justify-center z-10 absolute bottom-10 left-1/2 -translate-x-1/2 ${isExpanded && "!-bottom-20"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-300"
              aria-label="Show all gallery images"
            >
              {isExpanded ? "Show Less" : "Show All"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Show All Button */}
      </Container>
    </section>
  );
};

export default BeforeAfterGallery;
