import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin, ArrowDown } from "lucide-react";
import backgroundImage from "/banner15.png";

export default function ContactHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Luxury background loop video clip
  const videoSourceUrl = "/contact.mp4";

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins flex flex-col justify-between">
      
      {/* Background Media Layer */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <img
          src={backgroundImage}
          alt="RK Banquet Hall"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      </div>

      {/* Spacer for Top Navbar Alignment */}
      <div className="pt-24 sm:pt-28" />

      {/* Main Center Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 my-auto">

        {/* 2. Main Title Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-marcelleus-sc text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-[1.12] tracking-wide">
            Celebrate Your Special Moments <br />
            <span className="text-[#C8A96A]">With Us</span>
          </h1>
        </motion.div>

        {/* 3. Descriptive Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
        >
          Reach out today to check availability, discuss your requirements, and
          start planning an unforgettable experience.
        </motion.p>

        {/* 4. Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pt-2"
        >
          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight * 0.85,
                behavior: "smooth",
              })
            }
            className="group relative inline-flex items-center gap-3 bg-[#C8A96A] text-black px-7 py-3.5 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white shadow-lg"
          >
            <span>Get In Touch</span>
            <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}