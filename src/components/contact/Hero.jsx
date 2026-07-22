import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin, ArrowDown } from "lucide-react";
import backgroundImage from "/banner15.webp";

// Orchestration: parent controls stagger timing, children just declare variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const infoRow = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.75 },
  },
};

const infoItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Luxury background loop video clip
  const videoSourceUrl = "/contact.mp4";

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins flex flex-col justify-between">

      {/* Background Media Layer — slow ambient drift */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <motion.img
          src={backgroundImage}
          alt="RK Banquet Hall"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{
            opacity: 1,
            scale: 1.06,
            transition: {
              opacity: { duration: 1.5, ease: "easeOut" },
              scale: { duration: 12, ease: "linear" },
            },
          }}
        />

        {/* Dark Overlay Gradient — breathes gently */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"
          animate={{ opacity: [1, 0.85, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Spacer for Top Navbar Alignment */}
      <div className="pt-24 sm:pt-28" />

      {/* Main Center Content Container */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 my-auto"
      >
        {/* Eyebrow */}
        <motion.span
          variants={fadeUp}
          className="text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D9C8A9]/70 font-light -mb-2"
        >
          Get In Touch
        </motion.span>

        {/* Main Title Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-marcelleus-sc text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-[1.12] tracking-wide"
        >
          Celebrate Your Special
          <br />
          <motion.span
            className="inline-block text-[#C8A96A]"
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            Moments With Us
          </motion.span>
        </motion.h1>

        {/* Descriptive Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Reach out today to check availability, discuss your requirements, and
          start planning an unforgettable experience.
        </motion.p>

        {/* Action Button */}
        <motion.div variants={fadeUp} className="pt-2">
          <motion.button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.85,
                behavior: "smooth",
              })
            }
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 bg-[#C8A96A] text-black px-7 py-3.5 text-xs font-bold tracking-[0.25em] uppercase transition-colors duration-300 hover:bg-white shadow-lg"
          >
            <span>Get In Touch</span>
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: 3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Quick Contact Info Row */}
        <motion.div
          variants={infoRow}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 text-[#F5EDE0]/80"
        >
          <motion.a
            href="tel:+911234567890"
            variants={infoItem}
            whileHover={{ color: "#C8A96A" }}
            className="flex items-center gap-2 text-xs sm:text-sm tracking-wide"
          >
            <PhoneCall className="w-4 h-4" />
            <span>+91 12345 67890</span>
          </motion.a>

          <motion.a
            href="mailto:hello@rkbanquethall.com"
            variants={infoItem}
            whileHover={{ color: "#C8A96A" }}
            className="flex items-center gap-2 text-xs sm:text-sm tracking-wide"
          >
            <Mail className="w-4 h-4" />
            <span>hello@rkbanquethall.com</span>
          </motion.a>

          <motion.span
            variants={infoItem}
            className="flex items-center gap-2 text-xs sm:text-sm tracking-wide"
          >
            <MapPin className="w-4 h-4" />
            <span>Greater Noida, UP</span>
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}