import React, { useState } from "react";
import { motion } from "framer-motion";
import { Film, Image as ImageIcon, ArrowDown } from "lucide-react";
import backgroundImage from "/banner14.png";

export default function GalleryHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative w-full h-[90vh] min-h-[650px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins">
      {/* Cinematic Media Core Container */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        {/* Cinematic Background Video Layer */}
        <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
          <img
            src={backgroundImage}
            alt="Banquet Hall"
            className="w-full h-full object-cover opacity-60 scale-100 transition-transform duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(38, 37, 37, 0.8)_100%)] z-10" />
      </div>

      {/* Main Grid Content Framework */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center mt-20">
        {/* Main Editorial Text Spread */}
        <div className="max-w-4xl tracking-wide text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-marcelleus-sc text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-wide">
              Creating Beautiful
              <br />
              <span className="text-[#C8A96A]">Celebration Memories</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-300 font-light text-base sm:text-md lg:text-md max-w-3xl mt-8 leading-relaxed mx-auto"
          >
            Explore our gallery featuring elegant weddings, grand receptions,
            corporate events, birthday celebrations, and beautifully decorated
            banquet spaces.
          </motion.p>
        </div>

        {/* Control Base Bar Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.9,
                behavior: "smooth",
              })
            }
            className="group flex flex-col items-center gap-3 cursor-pointer focus:outline-none"
          >
            <span className="pt-serif text-lg font-semibold uppercase tracking-[0.35em] text-[#FFFFFF]/80 group-hover:text-[#D9C8A9] transition-colors duration-300">
              Explore Gallery
            </span>

            {/* Animated Arrow + Line */}
            <div className="relative flex flex-col items-center">
              {/* <div className="w-[1px] h-10 bg-[#D9C8A9] group-hover:bg-[#D9C8A9] transition-colors duration-500 overflow-hidden relative">
                <span className="absolute top-0 left-0 w-full h-3/4 bg-[#D9C8A9] animate-pulse" />
              </div> */}
              <div className="p-2 -mt-1 rounded-full border border-[#D9C8A9] bg-[#FFFFFF] text-[#D9C8A9] group-hover:border-[#D9C8A9] group-hover:bg-[#D9C8A9] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-sm">
                <ArrowDown className="w-3.5 h-3.5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
