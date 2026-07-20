import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-[100dvh] min-h-[560px] overflow-hidden bg-[#0F0F0F] font-poppins">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      >
        <source
          src="/home.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Dark & Gold Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/70 via-[#0F0F0F]/50 to-[#0F0F0F]/80 z-10" />

      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        {/* Fine Decorative Accent Label */}
        {/* <span className="font-cinzelDecorative text-xs md:text-sm tracking-[0.4em] text-[#C8A96A] uppercase font-semibold mb-4 animate-fade-in">
      Welcome to Grandeur
    </span> */}

        {/* Main Luxury Heading */}
        {/* Main Luxury Heading */}
        <h1 className="font-cinzelDecorative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-wide text-white max-w-[90%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl leading-tight sm:leading-tight mb-4 sm:mb-6">
          Celebrate Your{" "}
          <span className="bg-gradient-to-b from-[#8C6A2A] via-[#C8A96A] to-[#F7E7A9] bg-clip-text text-transparent">
            Dream Wedding
          </span>
          <br />
          In Unmatched Elegance
        </h1>

        {/* Supporting Text */}
        <p className="text-[#F8F6F2] text-sm xs:text-base sm:text-lg max-w-[90%] sm:max-w-lg md:max-w-2xl font-light tracking-wide opacity-90 mb-8 sm:mb-10 leading-relaxed">
          Create unforgettable memories in a venue designed for love, laughter,
          and timeless celebrations. From intimate ceremonies to magnificent
          receptions, we transform every wedding into an extraordinary
          experience.
        </p>

        {/* Action Button */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-none border border-[#D4AF37]/40 text-xs sm:text-sm font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-[#7A5A1D] via-[#C8A96A] to-[#E8D39A] hover:brightness-110 transition-all duration-300 shadow-xl hover:shadow-[0_12px_30px_rgba(200,169,106,0.35)] whitespace-nowrap"
        >
          Book Your Dream Wedding
        </a>
        {/* <a 
        href="#" 
        className="inline-flex items-center justify-center px-8 py-4 border-2 border-white rounded-none text-xs md:text-sm font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-[#0F0F0F] transition-all duration-300"
      >
        Request a Proposal
      </a> */}
      </div>
    </div>
  );
}
