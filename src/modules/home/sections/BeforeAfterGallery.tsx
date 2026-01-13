"use client";
import { Container } from "@/components/ui";
import { motion } from "motion/react";
import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState, useMemo, useEffect } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import { imgBeforeAfter } from "@/lib/contants/images";

interface GalleryImage {
  id: string;
  src: StaticImageData;
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
      src: imgBeforeAfter[0],
      alt: "Car before full detail package - heavy dust and water spots",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "1-2",
      src: imgBeforeAfter[1],
      alt: "Car after full detail package - mirror-like finish",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "1-3",
      src: imgBeforeAfter[2],
      alt: "Car interior before cleaning - dirty upholstery",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },
    {
      id: "1-4",
      src: imgBeforeAfter[3],
      alt: "Car interior after cleaning - pristine interior",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },
    {
      id: "1-5",
      src: imgBeforeAfter[4],
      alt: "Engine bay before detailing - covered in grease and dirt",
      title: "Engine Detailing",
      type: "Enhancement Package",
    },
    {
      id: "1-6",
      src: imgBeforeAfter[5],
      alt: "Engine bay after detailing - spotless and restored look",
      title: "Engine Detailing",
      type: "Enhancement Package",
    },

    // Column 2
    {
      id: "2-1",
      src: imgBeforeAfter[6],
      alt: "Paint before restoration - swirl marks and oxidation",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "2-2",
      src: imgBeforeAfter[7],
      alt: "Paint after restoration - professional polish shine",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "2-3",
      src: imgBeforeAfter[8],
      alt: "Car exterior before quick detail - daily grime buildup",
      title: "Quick Detail",
      type: "Mini Package",
    },
    {
      id: "2-4",
      src: imgBeforeAfter[9],
      alt: "Car exterior after quick detail - fresh and clean",
      title: "Quick Detail",
      type: "Mini Package",
    },
    {
      id: "2-5",
      src: imgBeforeAfter[10],
      alt: "Wheel rims before cleaning - brake dust and stains",
      title: "Wheel & Tire Cleaning",
      type: "Mini Package",
    },
    {
      id: "2-6",
      src: imgBeforeAfter[11],
      alt: "Wheel rims after cleaning - polished and shining",
      title: "Wheel & Tire Cleaning",
      type: "Mini Package",
    },

    // Column 3
    {
      id: "3-1",
      src: imgBeforeAfter[12],
      alt: "Luxury vehicle before detailing service",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "3-2",
      src: imgBeforeAfter[13],
      alt: "Luxury vehicle after detailing - professional results",
      title: "Complete Transformation",
      type: "Full Detail Package",
    },
    {
      id: "3-3",
      src: imgBeforeAfter[14],
      alt: "Red car interior before cleaning service",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },
    {
      id: "3-4",
      src: imgBeforeAfter[15],
      alt: "Red car interior after cleaning - pristine condition",
      title: "Deep Interior Clean",
      type: "Interior Package",
    },
    {
      id: "3-5",
      src: imgBeforeAfter[16],
      alt: "Headlights before restoration - yellow and foggy",
      title: "Headlight Restoration",
      type: "Enhancement Package",
    },
    {
      id: "3-6",
      src: imgBeforeAfter[17],
      alt: "Headlights after restoration - clear and bright",
      title: "Headlight Restoration",
      type: "Enhancement Package",
    },

    // Column 4
    {
      id: "4-1",
      src: imgBeforeAfter[18],
      alt: "Vehicle body before paint correction and polish",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "4-2",
      src: imgBeforeAfter[19],
      alt: "Vehicle body after paint correction - gleaming finish",
      title: "Paint Restoration",
      type: "Enhancement Package",
    },
    {
      id: "4-3",
      src: imgBeforeAfter[20],
      alt: "Car undercarriage before detailing",
      title: "Quick Detail",
      type: "Mini Package",
    },
    {
      id: "4-4",
      src: imgBeforeAfter[21],
      alt: "Car undercarriage after detailing - clean and fresh",
      title: "Quick Detail",
      type: "Mini Package",
    },
    {
      id: "4-5",
      src: imgBeforeAfter[22],
      alt: "Convertible roof before deep clean - dirt and stains",
      title: "Convertible Roof Clean",
      type: "Interior Package",
    },
    {
      id: "4-6",
      src: imgBeforeAfter[23],
      alt: "Convertible roof after deep clean - refreshed fabric",
      title: "Convertible Roof Clean",
      type: "Interior Package",
    },
  ];

  // Organize images by columns
  const columnedGallery = useMemo(() => {
    const columns = [[], [], [], []] as GalleryImage[][];
    galleryData.forEach((img, idx) => {
      const columnIndex = idx % 4;

      columns[columnIndex]?.push(img);
    });
    return columns;
  }, []);

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

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.blur(); // bỏ focus để tránh auto-scroll

    setIsExpanded((prev) => !prev);

    if (isExpanded) {
      const buttonEl = e.currentTarget;
      setTimeout(() => {
        const rect = buttonEl.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!inView) {
          buttonEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 350);
    }
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
        <div className="relative mb-4 ">
          {!isExpanded && (
            <div className="absolute inset-0 z-1 bg-gradient-to-t from-background via-background/1 to-transparent pointer-events-none" />
          )}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {columnedGallery.map((column, colIndex) => (
              <motion.div
                key={`gallery-col-${colIndex}`}
                className="relative flex flex-col gap-6 "
                variants={itemVariants}
              >
                {/* Gallery Images */}
                <motion.div
                  className="flex flex-col gap-6 overflow-hidden"
                  animate={{ height: isExpanded ? "auto" : 1000 }}
                  transition={{ duration: 0.5 }}
                >
                  {column.map((image) => (
                    <motion.article
                      key={image.id}
                      className="relative overflow-hidden rounded-lg bg-muted flex-shrink-0 group"
                      variants={itemVariants}
                      whileHover={{ y: -4 }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                        // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className={`flex justify-center z-1 absolute inset-0 items-end w-full`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {!isExpanded ? (
              <button
                onClick={handleToggle}
                id="show-more"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-300"
                aria-label="Show all gallery images"
              >
                Show All
                <ArrowDown className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleToggle}
                id="show-less"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-300"
                aria-label="Show all gallery images"
              >
                Show Less
                <ArrowUp className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </div>

        {/* Show All Button */}
      </Container>
    </section>
  );
};

export default BeforeAfterGallery;
