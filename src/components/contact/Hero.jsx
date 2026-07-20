import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDownRight, PhoneCall, MapPin } from 'lucide-react';

export default function ContactHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Luxury background loop video clip
  const videoSourceUrl = "/contact.mp4";

  return (
    <section className="relative w-full bg-[#0A0A0A] overflow-hidden font-poppins">
      
      {/* Background Video Stream Layer */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <source src={videoSourceUrl} type="video/mp4" />
          Your browser does not support high-fidelity ambient background streams.
        </video>

        {/* Essential Contrast Filters reinstated to make light gold/white typography pop
        <div className="absolute inset-0 bg-[#0A0A0A]/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" /> */}
      </div>

      {/* Main Content Container - Using natural height paddings for crisp spatial density */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20 flex flex-col gap-12">
        
        {/* Structural Sub-header Accent Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 text-[#C8A96A]"
        >
          <span className="font-cinzel text-xs tracking-[0.5em] uppercase font-bold">
            Reserve Your Celebration
          </span>
          <span className="h-[1px] w-12 bg-[#C8A96A]/30" />
        </motion.div>

        {/* Main Text Structural Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-cinzelDecorative text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-wide">
                Celebrate Your Special Moments <br />
                <span className="text-[#C8A96A]">With Us</span>
              </h1>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-gray-400 font-light text-sm sm:text-base leading-relaxed"
            >
              Whether you're planning a dream wedding, engagement, birthday celebration, corporate event, anniversary, or any special occasion, our dedicated team is here to make your vision a reality. Reach out today to check availability, discuss your requirements, and start planning an unforgettable experience.
            </motion.p>
          </div>
        </div>

        {/* Bottom Call Us Meta Cards Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-xs font-light"
        >
          
          {/* Email Info Card */}
          <div className="flex items-start space-x-3 bg-white/[0.02] border border-white/5 p-4 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 flex items-center justify-center text-[#C8A96A] shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase font-semibold tracking-wider mb-1">Email Us</span>
              <a href="mailto:info@rkbanquet.com" className="text-gray-200 text-sm font-medium hover:underline">info@rkbanquet.com</a>
            </div>
          </div>

          {/* Call Us Info Card */}
          <div className="flex items-start space-x-3 bg-white/[0.02] border border-white/5 p-4 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 flex items-center justify-center text-[#C8A96A] shrink-0">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase font-semibold tracking-wider mb-1">Call Us</span>
              <a href="tel:+919891018675" className="text-gray-200 text-sm font-medium font-mono hover:underline">+91-9891018675</a>
            </div>
          </div>

          {/* Visit Our Venue Info Card */}
          <div className="flex items-start space-x-3 bg-white/[0.02] border border-white/5 p-4 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/5 flex items-center justify-center text-[#C8A96A] shrink-0">
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block text-[10px] text-gray-500 uppercase font-semibold tracking-wider mb-1">Visit Our Venue</span>
              <p className="text-gray-300 text-xs font-normal leading-relaxed">
                RK Banquet Hall 74, Rakesh Marg, Pocket K, Nehru Nagar III, Ghaziabad, Uttar Pradesh - 201001
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}