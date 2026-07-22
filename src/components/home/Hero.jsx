import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

// Replace these image paths with your actual asset locations
const bgImages = ["/banner1.png", "/banner2.png", "/banner3.png"];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bgImages.length);
    }, 5000); // Rotates every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] min-h-[560px] overflow-hidden bg-[#21160e] font-poppins">
      {/* Background Slideshow */}
      {bgImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Optional Luxury Gradient Overlay */}
      {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/40 to-black/70" /> */}

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 mt-18 flex flex-col justify-center items-center text-center">
        {/* Main Luxury Heading */}
        <h1 className="font-marcellus-sc text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide leading-tight sm:leading-tight text-white max-w-[90%] sm:max-w-3xl lg:max-w-5xl mb-4 sm:mb-6">
          Celebrate Your{" "}
          <span className="bg-gradient-to-b from-[#C8A96A] via-[#C8A96A] to-[#C8A96A] bg-clip-text text-transparent">
            Dream Wedding
          </span>
          <br />
          In Unmatched Elegance
        </h1>

        {/* Supporting Text */}
        <p className="text-[#F5EDE0] text-sm xs:text-base sm:text-md max-w-[90%] sm:max-w-lg md:max-w-2xl font-light tracking-wide opacity-90 leading-relaxed">
          Celebrate love in a venue crafted for unforgettable weddings and
          timeless memories.
        </p>

        {/* Luxury CTA Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex xs:flex-row flex-wrap gap-3 sm:gap-4 "
          >
            <a
            href="/contact"
             className="w-[320px] px-4 sm:px-5 py-3.5 sm:py-4 bg-[#B8945A] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest hover:bg-[#C5A97A] transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <span>Book Your Event</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

           <a
            href="/services"
             className="w-[320px] px-4 sm:px-5 py-3.5 sm:py-4 bg-[#D9C8A9] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest hover:bg-[#C5A97A] transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <span>View Our Services</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#D9C8A9]"
                : "w-2 bg-[#F5EDE0]/40 hover:bg-[#F5EDE0]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
