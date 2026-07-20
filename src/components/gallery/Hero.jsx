import React, { useState } from "react";
import { motion } from "framer-motion";
import { Film, Image as ImageIcon, ArrowDown } from "lucide-react";

export default function GalleryHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  //   // High-end fallback architectural backdrop if the network connection stalls
  //   const backupFallbackImage = "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80";

  // Luxury background video clip - replaces with your curated production asset clip path
  const videoSourceUrl = "/gallery.mp4";

  return (
    <section className="relative w-full h-[90vh] min-h-[650px] lg:h-screen bg-[#0A0A0A] overflow-hidden font-poppins">
      {/* Cinematic Media Layer Core */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        {/* Layer 1: Placeholder Image Matte */}
        {/* <img 
          src={backupFallbackImage} 
          alt="Visual archive showcase fallback environment" 
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-0 absolute' : 'opacity-30'
          }`}
        /> */}

        {/* Layer 2: High Definition HTML5 Loop Stream */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? "opacity-25" : "opacity-0"
          }`}
        >
          <source src={videoSourceUrl} type="video/mp4" />
          Your system browser does not support integrated background video
          rendering.
        </video>

        {/* Layer 3: Contrast Filters & Color Grading Overlays
        <div className="absolute inset-0 bg-[#0A0A0A]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.95)_0%,rgba(10,10,10,0.4)_50%,rgba(10,10,10,0.95)_100%)] z-10" /> */}
      </div>

      {/* Main Grid Content Framework */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-36 pb-16">
        

        {/* Main Editorial Text Spread */}
        <div className="max-w-4xl tracking-wide">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-cinzelDecorative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-wide">
              Creating Beautiful
              <br />
              <span className="text-[#C8A96A]">Celebration Memories</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 font-light text-base sm:text-lg max-w-xl mt-8 leading-relaxed"
          >
            Explore our gallery featuring elegant weddings, grand receptions,
            corporate events, birthday celebrations, and beautifully decorated
            banquet spaces. Every image reflects our commitment to creating
            unforgettable experiences for every occasion.
          </motion.p>
        </div>

        {/* Control Base Bar Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end border-t border-white/10 pt-8"
        >

          {/* Interactive Navigational Scroll Wheel Anchor */}
          <div className="md:col-span-3 flex justify-end">
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight * 0.9,
                  behavior: "smooth",
                })
              }
              className="flex items-center space-x-3 text-xs font-semibold tracking-widest uppercase text-[#C8A96A] cursor-pointer group"
            >
              <span className="group-hover:text-white transition-colors duration-300">
                Explore Gallery
              </span>
              <div className="w-10 h-10 border border-[#C8A96A]/20 bg-white/[0.02] flex items-center justify-center text-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-black transition-all duration-400 rounded-full">
                <ArrowDown className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
