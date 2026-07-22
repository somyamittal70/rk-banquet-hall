import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import backgroundImage from "/banner8.webp";

// Orchestration: parent controls stagger timing, children just declare variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[520px] md:h-[100vh] bg-[#0F0F0F] overflow-hidden flex items-center justify-center mt-20">
      {/* Cinematic Background Layer — slow reveal + ambient drift */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <motion.img
          src={backgroundImage}
          alt="Banquet Hall"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            transition: {
              opacity: { duration: 1.6, ease: "easeOut" },
              scale: { duration: 10, ease: "linear" },
            },
          }}
        />

        {/* Layered Luxury Gradient Vignette Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </div>

      {/* Hero Typography Content Block */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center"
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          className="mb-4 text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D9C8A9]/70 font-light font-poppins"
        >
          RK Banquet Hall
        </motion.span>

        {/* Primary Impact Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-marcelleus-sc text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-wide leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6"
        >
          Where Every Celebration
          <br />
          <motion.span
            className="inline-block text-[#C8A96A] font-bold font-marcelleus-sc"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
          >
            Becomes A Timeless Memory
          </motion.span>
        </motion.h1>

        {/* Subtitle Body Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-[92%] xs:max-w-sm sm:max-w-xl md:max-w-2xl text-gray-300 font-light text-sm sm:text-base md:text-md leading-relaxed font-poppins tracking-wide mb-8 sm:mb-10 opacity-90"
        >
          At RK Banquet Hall, we bring your dream celebrations to life with
          luxurious interiors, and personalized event planning.
        </motion.p>

        {/* Action Button */}
        <motion.a
          href="/contact"
          variants={fadeUp}
          whileHover={{ y: -3, boxShadow: "0 16px 36px rgba(217,169,106,0.35)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-none border border-[#D9C8A9]/50 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-gradient-to-r from-[#C8A96A] via-[#C8A96A] to-[#C8A96A] hover:brightness-110 transition-[filter] duration-300 shadow-xl whitespace-nowrap"
        >
          Book Your Dream Wedding
        </motion.a>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#D9C8A9]/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}