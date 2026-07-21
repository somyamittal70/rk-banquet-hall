import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import backgroundImage from "/banner13.png";

export default function ServiceHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Fallback structural image if video stream cuts or drops connection
  //   const backupFallbackImage = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=80";

  // Replace this sample URL asset link with your final production video file path (.mp4 preferred)
  const videoSourceUrl = "/services.mp4";

  return (
    <section className="relative w-full h-[100dvh] min-h-[560px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,10,10,0.8)_100%)] z-10" />
      </div>

      {/* Main Content Layout Shield */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-25">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-cormonant text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-wide leading-[1.2] sm:leading-[1.15]"
          >
            Celebrate Every Occasion with
            <br />
            <span className="text-[#C8A96A]">Elegant Banquet Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-gray-300 font-light text-sm sm:text-base md:text-md lg:text-md max-w-3xl mt-6 sm:mt-8 leading-relaxed mx-auto"
          >
            From dream weddings to corporate events and private celebrations, RK
            Banquet Hall offers elegant venues, exceptional hospitality, and
            unforgettable experiences.
          </motion.p>

          {/* Luxury CTA Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex xs:flex-row flex-wrap gap-3 sm:gap-4 "
          >
            <a
              href="/contact"
              className="w-[320px] px-5 sm:px-6 py-3.5 sm:py-4 bg-[#C8A96A] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest hover:bg-[#A67C3D] transition-colors duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>Book Your Event</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            <a
              href="/gallery"
              className="w-[320px] px-5 sm:px-6 py-3.5 sm:py-4 bg-[#C8A96A] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest hover:bg-[#A67C3D] transition-colors duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>View Our Gallery</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
