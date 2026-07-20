import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSpecs() {
  const [activeTab, setActiveTab] = useState(0);

  const specifications = [
    {
      title: "Royal Banquet Hall",
      subtitle: "Elegant Wedding Venue",
      description:
        "Our luxurious banquet hall is designed to host grand weddings, receptions, engagements, and family celebrations. With elegant interiors, premium décor, spacious seating, and a sophisticated ambiance, it creates the perfect setting for unforgettable moments.",
      image:
        "https://i.pinimg.com/control1/1200x/25/e5/87/25e587165685712af6181e7356b007b5.jpg",
      stats: [
        { label: "Guest Capacity", value: "800+ Guests" },
        { label: "Parking", value: "Ample Space" },
        { label: "Air Conditioned", value: "Fully AC" },
      ],
    },
    {
      title: "Wedding Décor",
      subtitle: "Customized Themes",
      description:
        "From breathtaking floral arrangements and elegant mandaps to luxurious stage setups and ambient lighting, our décor team transforms every celebration into a beautiful and unforgettable experience.",
      image:
        "https://i.pinimg.com/736x/4e/40/79/4e4079893f4cf53c0c9edee18b34eac9.jpg",
      stats: [
        { label: "Theme Options", value: "Custom Designs" },
        { label: "Floral Décor", value: "Premium Flowers" },
        { label: "Stage Setup", value: "Luxury Designs" },
      ],
    },
    {
      title: "Dining & Hospitality",
      subtitle: "Exceptional Service",
      description:
        "Treat your guests to an outstanding culinary experience with customized multi-cuisine menus, professional service, and warm hospitality that make every celebration truly memorable.",
      image:
        "https://i.pinimg.com/control1/1200x/d6/b6/bd/d6b6bdb32f8029dfc2bbe091a6a260df.jpg",
      stats: [
        { label: "Cuisine", value: "Multi-Cuisine" },
        { label: "Service", value: "Professional Staff" },
        { label: "Experience", value: "Premium Hospitality" },
      ],
    },
  ];

  return (
    <section className="relative bg-[#F8F6F2] text-[#0F0F0F] font-poppins py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A67C3D]" />
              <span className="font-cinzel text-xs tracking-[0.4em] text-[#A67C3D] uppercase font-bold">
                Our Venue
              </span>
            </div>
            <h2 className="font-cinzelDecorative text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F0F0F] leading-tight tracking-wide">
              Discover The
              <span className="text-[#A67C3D]">
                {" "}
                Perfect Wedding Destination
              </span>
            </h2>
          </div>

          {/* Luxury Tab Buttons Controls */}
          <div className="flex space-x-2 border-b border-black/5 pb-2 md:pb-0 md:border-none">
            {specifications.map((spec, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-2 px-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 relative ${
                  activeTab === index
                    ? "text-[#A67C3D]"
                    : "text-gray-400 hover:text-[#0F0F0F]"
                }`}
              >
                {spec.title.split(" ")[0]} {/* Shorthand for tab button */}
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A67C3D]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic AnimatePresence Window */}
        <div className="bg-[#0F0F0F] text-white p-8 md:p-12 lg:p-16 border border-[#C8A96A]/20 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Descriptive Context Block */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <span className="font-cinzel text-xs tracking-[0.3em] text-[#C8A96A] uppercase font-bold block mb-2">
                    {specifications[activeTab].subtitle}
                  </span>
                  <h3 className="font-cinzelDecorative text-2xl sm:text-3xl font-bold text-white tracking-wide mb-6">
                    {specifications[activeTab].title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed mb-8">
                    {specifications[activeTab].description}
                  </p>
                </div>

                {/* Subspecifications Parameters Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {specifications[activeTab].stats.map((stat, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 block mb-1 font-cinzel">
                        {stat.label}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-[#C8A96A] font-cinzel tracking-wide">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: High-End Panoramic Asset Frame */}
              <div className="lg:col-span-6 overflow-hidden aspect-[16/10] relative border border-white/10 group">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7 }}
                  src={specifications[activeTab].image}
                  alt={specifications[activeTab].title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
