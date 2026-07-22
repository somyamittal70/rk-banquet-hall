import React, { useState } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("All");

  const tags = ["All", "Wedding", "Reception", "Engagement"];

  const reviews = [
    {
      id: 1,
      tag: "Wedding",
      name: "Rahul & Priya Sharma",
      role: "Bride & Groom",
      quote:
        "Our wedding day was nothing short of magical. The beautiful décor, exceptional hospitality, and seamless event planning made every moment unforgettable.",
      rating: 5,
      date: "February 2026",
      highlight: "A Grand Royal Affair",
    },
    {
      id: 2,
      tag: "Reception",
      name: "Aman & Neha Verma",
      role: "Newly Married Couple",
      quote:
        "From the grand entrance to the elegant reception setup, everything exceeded our expectations. The team managed every detail perfectly.",
      rating: 5,
      date: "April 2026",
      highlight: "Exquisite Hospitality",
    },
    {
      id: 3,
      tag: "Engagement",
      name: "Rohan & Simran Kapoor",
      role: "Couple",
      quote:
        "The engagement ceremony was beautifully organized with elegant floral décor, excellent catering, and warm hospitality throughout.",
      rating: 5,
      date: "June 2026",
      highlight: "Memorable Beginning",
    },
  ]

  const filteredReviews =
    activeTab === "All" ? reviews : reviews.filter((r) => r.tag === activeTab);

  return (
    <section className="relative bg-[#F5EDE0] text-[#21160e] font-poppins py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-[#D9C8A9]">
      {/* Soft Ambient Background Orbs */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#D9C8A9]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#6B4423]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
           <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#B08D57]" />
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#B08D57]">
                CLient Journal
              </span>
            </div>
            <h2 className="marcellus-sc text-3xl sm:text-4xl md:text-5xl font-bold text-[#21160e] tracking-wide">
              Stories of <span className="text-[#A06C3A] font-normal">Celebration</span>
            </h2>
          </div>

          {/* Underline Filter Navigation */}
          <div className="flex gap-4 border-b border-[#D9C8A9] pb-2 overflow-x-auto scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTab(tag)}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative pb-2 whitespace-nowrap ${
                  activeTab === tag
                    ? "text-[#21160e]"
                    : "text-[#21160e]/50 hover:text-[#21160e]"
                }`}
              >
                {tag}
                {activeTab === tag && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6B4423]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-[#FFFFFF] border border-[#E8DAC5] rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(107,68,35,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(107,68,35,0.18)] hover:border-[#D9C8A9] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Index Stamp */}
              <span className="absolute -top-0 -right-0 marcellus-sc font-bold text-5xl text-[#F5EDE0] opacity-60 select-none pointer-events-none group-hover:text-[#E8DAC5] transition-colors duration-500">
                0{index + 1}
              </span>

              <div className="relative z-10">
                {/* Tag & Rating Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B4423] bg-[#F5EDE0] px-3 py-1 rounded-md border border-[#D9C8A9]/50">
                    {review.tag}
                  </span>

                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-[#A06C3A] text-[#A06C3A]"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <Quote className="w-8 h-8 text-[#D9C8A9] mb-3 group-hover:text-[#A06C3A] transition-colors duration-300" />
                
                <p className="marcellus-sc italic text-base sm:text-lg text-[#21160e] leading-relaxed font-medium mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Footer Author Details */}
              <div className="relative z-10 pt-5 border-t border-[#E8DAC5] flex items-end justify-between mt-auto">
                <div>
                  <h3 className="marcellus-sc font-bold text-base text-[#21160e]">
                    {review.name}
                  </h3>
                  <p className="text-xs text-[#21160e]/60 font-light mt-0.5">
                    {review.role}
                  </p>
                </div>

                <div className="text-right">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-[#A06C3A]">
                    {review.highlight}
                  </span>
                  <span className="block text-[10px] text-[#21160e]/40 mt-0.5">
                    {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}