import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import backgroundImage from "/banner13.png";

// Fallback structural image if video stream cuts or drops connection
//   const backupFallbackImage = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80";

// Orchestration: parent controls stagger timing, children just declare variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.25, 1, 0.5, 1] },
  },
};

const ctaRow = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.75 },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function ServiceHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Replace this sample URL asset link with your final production video file path (.mp4 preferred)
  const videoSourceUrl = "/services.mp4";

  return (
    <section className="relative w-full h-[100dvh] min-h-[560px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins">
      {/* Cinematic Media Core Container */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        {/* Cinematic Background Layer — slow drift + settle */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
          <motion.img
            src={backgroundImage}
            alt="Banquet Hall"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{
              opacity: 0.6,
              scale: 1.04,
              transition: {
                opacity: { duration: 1.6, ease: "easeOut" },
                scale: { duration: 11, ease: "linear" },
              },
            }}
          />
        </div>

        {/* Radial vignette — breathes gently */}
        {/* <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(111,108,108,0.26)_0%,rgba(77,75,75,0.8)_100%)] z-10"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        /> */}
      </div>

      {/* Main Content Layout Shield */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-25"
        >
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            className="mb-4 text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D9C8A9]/70 font-light"
          >
            Our Services
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-marcelleus-sc text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-wide leading-[1.2] sm:leading-[1.15]"
          >
            Celebrate Every Occasion with
            <br />
            <motion.span
              className="inline-block text-[#C8A96A]"
              initial={{ opacity: 0, filter: "blur(6px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
            >
              Elegant Banquet Services
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 font-light text-sm sm:text-base md:text-md lg:text-md max-w-3xl mt-6 sm:mt-8 leading-relaxed mx-auto"
          >
            From dream weddings to corporate events and private celebrations, RK
            Banquet Hall offers elegant venues, exceptional hospitality, and
            unforgettable experiences.
          </motion.p>

          {/* Luxury CTA Controls */}
          <motion.div
            variants={ctaRow}
            className="mt-8 sm:mt-10 flex flex-row gap-5"
          >
            {/* Primary Gold Button */}
            <motion.a
              href="/contact"
              variants={ctaItem}
              whileHover={{
                y: -3,
                backgroundColor: "#A67C3D",
                borderColor: "#A67C3D",
                color: "#FFFFFF",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-[250px] h-14 bg-[#C8A96A] text-[#140D08] border border-[#C8A96A] font-semibold uppercase text-xs tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 shadow-md group"
            >
              <span className="whitespace-nowrap">Book Your Event</span>
              <motion.span
                className="flex-shrink-0"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </motion.a>

            {/* Secondary Opposite / Outlined Dark Button */}
            <motion.a
              href="/gallery"
              variants={ctaItem}
              whileHover={{
                y: -3,
                backgroundColor: "#C8A96A",
                color: "#140D08",
              }}
              whileTap={{ scale: 0.97 }}
              className="w-[250px] h-14 bg-[#C5A97A] text-[#140D08] border border-[#C8A96A] font-semibold uppercase text-xs tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              <span className="whitespace-nowrap">View Our Gallery</span>
              <motion.span
                className="flex-shrink-0"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
