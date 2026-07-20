import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

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
        {/* Visual Layer 1: Placeholder/Fallback Matte Frame */}
        {/* <img 
          src={backupFallbackImage} 
          alt="Luxury banquet environment structural background" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-0 absolute' : 'opacity-40'
          }`}
        /> */}

        {/* Visual Layer 2: HTML5 High Definition Stream Frame */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-35" : "opacity-0"
          }`}
        >
          <source src={videoSourceUrl} type="video/mp4" />
          Your system browser does not support integrated luxury background
          video streams.
        </video>

        {/* Visual Layer 3: Advanced Ambient Matte Overlay Gradients */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-[#0A0A0A]/20 to-[#0A0A0A]/40 z-10" /> */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(10,10,10,0.8)_100%)] z-10" />
      </div>

      {/* Main Content Layout Shield */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12">
        {/* Center Headline & Sub-Context Spread */}
        <div className="max-w-4xl my-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-cinzelDecorative text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-wide leading-[1.2] sm:leading-[1.15]"
          >
            Celebrate Every Occasion with
            <br />
            <span className="text-[#C8A96A]">Elegant Banquet Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-gray-400 font-light text-sm sm:text-base md:text-lg lg:text-xl max-w-[92%] xs:max-w-sm sm:max-w-xl md:max-w-2xl mt-6 sm:mt-8 leading-relaxed"
          >
            From grand weddings and lavish receptions to corporate events, birthday parties, and family celebrations, RK Banquet Hall offers beautifully designed venues, exceptional hospitality, customized décor, and delicious catering to make every event truly unforgettable.
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
             className="w-[320px] px-5 sm:px-6 py-3.5 sm:py-4 bg-[#C8A96A] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest hover:bg-[#A67C3D] transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <span>Book Your Event</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

           <a
            href="/gallery"
             className="w-[320px] px-5 sm:px-6 py-3.5 sm:py-4 bg-[#C8A96A] text-black font-semibold uppercase text-[11px] sm:text-xs tracking-widest hover:bg-[#A67C3D] transition-colors duration-300 flex items-center justify-center space-x-2 group">
              <span>View Our Gallery</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
