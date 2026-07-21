import React from "react";
import { ArrowDown, Play } from "lucide-react";
import backgroundImage from "/banner8.png"

export default function AboutHero() {
  // Replace this placeholder link with your premium high-resolution background video asset

  return (
    <section className="relative w-full h-[100dvh] min-h-[520px] md:h-[100vh] bg-[#0F0F0F] overflow-hidden flex items-center justify-center mt-20">
      {/* Cinematic Background Video Layer */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <img
          src={backgroundImage}
          alt="Banquet Hall"
          className="w-full h-full object-cover opacity-60 scale-100 transition-transform duration-1000"
        />

        {/* Layered Luxury Gradient Vignette Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/30 via-[#0F0F0F]/20 to-[#0F0F0F]" /> */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}
      </div>

      {/* Hero Typography Content Block */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
        {/* Primary Impact Headline */}
        {/* Primary Impact Headline */}
        <h1 className="font-marcelleus-sc text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-wide leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
          Where Every Celebration
          <br />
          <span className="text-[#C8A96A] font-bold font-marcelleus-sc">
            Becomes A Timeless Memory
          </span>
        </h1>

        {/* Subtitle Body Description */}
        <p className="max-w-[92%] xs:max-w-sm sm:max-w-xl md:max-w-2xl text-gray-300 font-light text-sm sm:text-base md:text-md leading-relaxed font-poppins tracking-wide mb-8 sm:mb-10 opacity-90">
          At RK Banquet Hall, we bring your dream celebrations to life with
          luxurious interiors, and personalized event planning.
        </p>

        {/* Action Button */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-none border border-[#D9C8A9]/50 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] bg-gradient-to-r from-[#C8A96A] via-[#C8A96A] to-[#6B4423] hover:brightness-110 transition-all duration-300 shadow-xl hover:shadow-[0_12px_30px_rgba(217,200,169,0.3)] whitespace-nowrap"
        >
          Book Your Dream Wedding
        </a>
      </div>
    </section>
  );
}
