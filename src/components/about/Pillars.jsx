import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutPillars() {
  const pillars = [
    {
      icon: Eye,
      title: "Elegant Venues",
      desc: "Our beautifully designed banquet halls provide the perfect backdrop for weddings, receptions, engagements, and every special celebration with timeless elegance and luxury.",
    },
    {
      icon: Sparkles,
      title: "Personalized Décor",
      desc: "Every celebration is uniquely styled with customized themes, floral arrangements, stage décor, ambient lighting, and elegant details that reflect your vision.",
    },
    {
      icon: ShieldCheck,
      title: "Exceptional Hospitality",
      desc: "Our experienced team is dedicated to delivering seamless event management, warm guest service, and flawless coordination from beginning to end.",
    },
    {
      icon: HeartHandshake,
      title: "Memories That Last Forever",
      desc: "We believe every celebration deserves to be unforgettable. From intimate gatherings to grand weddings, we create moments that you and your guests will cherish for a lifetime.",
    },
  ];

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Staggers the entry of each individual card
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] }, // Custom premium bezier curve
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "2rem", transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F6F2] font-poppins py-24 lg:py-32 overflow-hidden border-t border-b border-[#C8A96A]/10">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C8A96A]/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center space-x-3 mb-4">
            {/* Framer motion driven line extension */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={lineVariants}
              className="h-[1px] bg-[#C8A96A]"
            />
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#C8A96A] uppercase font-bold">
              Why Choose Us
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cinzelDecorative text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide"
          >
            What Makes
            <span className="text-[#C8A96A]"> RK Banquet Hall Special</span>
          </motion.h2>
        </div>

        {/* Interactive Staggered Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before entry into full viewport
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="group relative bg-[#1A1A1A] border border-white/[0.03] p-8 flex flex-col justify-between overflow-hidden transition-colors duration-500 hover:border-[#C8A96A]/30"
              >
                {/* Decorative Hover Top Light Strip */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8A96A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  {/* Icon Wrapper Frame */}
                  <div className="w-12 h-12 border border-[#C8A96A]/20 bg-[#0F0F0F] flex items-center justify-center text-[#C8A96A] mb-8 transition-all duration-500 group-hover:bg-[#C8A96A] group-hover:text-white group-hover:border-[#C8A96A]">
                    <IconComponent strokeWidth={1.2} className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-lg font-semibold text-white tracking-wider mb-4 group-hover:text-[#C8A96A] transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {pillar.desc}
                  </p>
                </div>

                {/* Corner Decorative Asset Index */}
                <div className="absolute bottom-4 right-4 font-cinzel text-[10px] tracking-widest text-white/[0.03] uppercase font-bold select-none group-hover:text-[#C8A96A]/10 transition-colors duration-300">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
