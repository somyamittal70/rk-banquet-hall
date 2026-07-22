import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Replace these image paths with your actual asset locations
const bgImages = ["/banner1.png", "/banner2.webp", "/banner3.webp"];

// Orchestration: parent controls stagger timing, children just declare variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const ctaRow = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.9 },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[100dvh] min-h-[560px] overflow-hidden bg-[#21160e] font-poppins">
      {/* Background Slideshow with Ken Burns drift + crossfade */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImages[currentSlide]}')` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{
            opacity: 1,
            scale: 1.14,
            transition: {
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 6.5, ease: "linear" },
            },
          }}
          exit={{ opacity: 0, transition: { duration: 1.1, ease: "easeInOut" } }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Subtle ambient vignette that breathes */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"
        animate={{ opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Content Layer */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 mt-18 flex flex-col justify-center items-center text-center"
      >

        {/* Main Luxury Heading — words reveal in sequence */}
        <motion.h1
          variants={fadeUp}
          className="font-marcellus-sc text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide leading-tight sm:leading-tight text-white max-w-[90%] sm:max-w-3xl lg:max-w-5xl mb-4 sm:mb-6"
        >
          Celebrate Your{" "}
          <motion.span
            className="relative inline-block bg-gradient-to-b from-[#C8A96A] via-[#C8A96A] to-[#C8A96A] bg-clip-text text-transparent"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            Dream Wedding
          </motion.span>
          <br />
          In Unmatched Elegance
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          variants={fadeUp}
          className="text-[#F5EDE0] text-sm xs:text-base sm:text-md max-w-[90%] sm:max-w-lg md:max-w-2xl font-light tracking-wide opacity-90 leading-relaxed"
        >
          Celebrate love in a venue crafted for unforgettable weddings and
          timeless memories.
        </motion.p>

        {/* Luxury CTA Controls */}
        <motion.div
          variants={ctaRow}
          className="mt-8 sm:mt-10 flex xs:flex-row flex-wrap gap-3 sm:gap-4"
        >
          <motion.a
            href="/contact"
            variants={ctaItem}
            whileHover={{ y: -3, backgroundColor: "#C5A97A" }}
            whileTap={{ scale: 0.97 }}
            className="w-[320px] px-4 sm:px-5 py-3.5 sm:py-4 bg-[#B8945A] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest transition-colors duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Book Your Event</span>
            <motion.span
              className="flex-shrink-0"
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
          </motion.a>

          <motion.a
            href="/services"
            variants={ctaItem}
            whileHover={{ y: -3, backgroundColor: "#C5A97A" }}
            whileTap={{ scale: 0.97 }}
            className="w-[320px] px-4 sm:px-5 py-3.5 sm:py-4 bg-[#D9C8A9] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest transition-colors duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>View Our Services</span>
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

      {/* Slide Navigation Dots */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        {bgImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="h-1.5 rounded-full bg-[#F5EDE0]/40 hover:bg-[#F5EDE0]/70 relative overflow-hidden"
            animate={{ width: index === currentSlide ? 32 : 8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {index === currentSlide && (
              <motion.span
                key={currentSlide}
                className="absolute inset-0 bg-[#D9C8A9]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5.5, ease: "linear" }}
                style={{ originX: 0 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 right-6 z-20 hidden sm:flex flex-col items-center gap-2 text-[#F5EDE0]/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.span
          className="w-px h-8 bg-[#F5EDE0]/50"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </div>
  );
}