import React, { useState } from "react";
import { motion } from "framer-motion";
import { Film, Image as ImageIcon, ArrowDown } from "lucide-react";
import backgroundImage from "/banner14.webp";

// Orchestration: parent controls stagger timing, children just declare variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GalleryHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative w-full h-[90vh] min-h-[650px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins">
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
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(38,37,37,0.8)_100%)] z-10"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Grid Content Framework */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-20"
      >
        {/* Main Editorial Text Spread */}
        <div className="max-w-4xl tracking-wide text-center flex flex-col items-center">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 mb-4 text-[11px] sm:text-xs tracking-[0.35em] uppercase text-[#D9C8A9]/70 font-light"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Photo &amp; Film</span>
            <Film className="w-3.5 h-3.5" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="font-marcelleus-sc text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-wide">
              Creating Beautiful
              <br />
              <motion.span
                className="inline-block text-[#C8A96A]"
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                Celebration Memories
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 font-light text-base sm:text-md lg:text-md max-w-3xl mt-8 leading-relaxed mx-auto"
          >
            Explore our gallery featuring elegant weddings, grand receptions,
            corporate events, birthday celebrations, and beautifully decorated
            banquet spaces.
          </motion.p>
        </div>

        {/* Control Base Bar Row */}
        <motion.div variants={fadeUp} className="mt-12 flex justify-center">
          <motion.button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.9,
                behavior: "smooth",
              })
            }
            whileHover="hover"
            initial="rest"
            animate="rest"
            className="group flex flex-col items-center gap-3 cursor-pointer focus:outline-none"
          >
            <motion.span
              variants={{
                rest: { color: "rgba(255,255,255,0.8)" },
                hover: { color: "#D9C8A9" },
              }}
              transition={{ duration: 0.3 }}
              className="pt-serif text-lg font-semibold uppercase tracking-[0.35em]"
            >
              Explore Gallery
            </motion.span>

            {/* Animated Arrow + Pulsing Line */}
            <div className="relative flex flex-col items-center">
              <motion.div
                className="w-px h-8 bg-[#D9C8A9]/60 overflow-hidden relative"
                variants={{ rest: {}, hover: {} }}
              >
                <motion.span
                  className="absolute top-0 left-0 w-full bg-[#D9C8A9]"
                  animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <motion.div
                variants={{
                  rest: { backgroundColor: "#FFFFFF", color: "#D9C8A9", scale: 1 },
                  hover: { backgroundColor: "#D9C8A9", color: "#FFFFFF", scale: 1.08 },
                }}
                transition={{ duration: 0.3 }}
                className="p-2 -mt-1 rounded-full border border-[#D9C8A9] shadow-sm"
              >
                <motion.span
                  variants={{ rest: { y: 0 }, hover: { y: 2 } }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </motion.span>
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}