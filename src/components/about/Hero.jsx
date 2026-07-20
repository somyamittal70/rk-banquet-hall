import React from "react";
import { ArrowDown, Play } from "lucide-react";

export default function AboutHero() {
  // Replace this placeholder link with your premium high-resolution background video asset
  const videoSource = "about.mp4";

  return (
    <section className="relative w-full h-[100dvh] min-h-[520px] md:h-[100vh] bg-[#0F0F0F] overflow-hidden flex items-center justify-center">
      {/* Cinematic Background Video Layer */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-100 transition-transform duration-1000"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Layered Luxury Gradient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/60 via-[#0F0F0F]/40 to-[#0F0F0F]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Typography Content Block */}
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
        {/* Primary Impact Headline */}
        {/* Primary Impact Headline */}
        <h1 className="font-cinzelDecorative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
          Where Every Celebration
          <br />
          <span className="text-[#C8A96A] italic font-normal font-cinzel">
            Becomes A Timeless Memory
          </span>
        </h1>

        {/* Subtitle Body Description */}
        <p className="max-w-[92%] xs:max-w-sm sm:max-w-xl md:max-w-2xl text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed font-poppins tracking-wide mb-8 sm:mb-10 opacity-90">
          At RK Banquet Hall, we bring your dream celebrations to life with
          luxurious interiors, elegant décor, exceptional hospitality, and
          personalized event planning. From grand weddings and receptions to
          engagements and family celebrations, every occasion is crafted with
          perfection and unforgettable charm.
        </p>
      </div>
    </section>
  );
}
