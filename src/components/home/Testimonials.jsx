import React, { useState } from "react";
import { Star, Quote, ChevronRight, Sparkles } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("All");
  const [featuredIndex, setFeaturedIndex] = useState(0);

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
    {
      id: 4,
      tag: "Wedding",
      name: "Arjun & Meera Singh",
      role: "Bride & Groom",
      quote:
        "Choosing RK Banquet Hall was the best decision we made. The luxurious ambiance and attention to every detail made our wedding a dream come true.",
      rating: 5,
      date: "July 2026",
      highlight: "Dream Wedding Come True",
    },
  ];

  const filteredReviews =
    activeTab === "All" ? reviews : reviews.filter((r) => r.tag === activeTab);

  // Safety check if active tab changes and featured index exceeds filtered items length
  const activeReview = filteredReviews[featuredIndex] || filteredReviews[0];

  return (
    <section className="relative bg-[#F5EDE0] text-[#6B4423] font-poppins py-24 lg:py-32 overflow-hidden border-b border-[#D9C8A9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block with Clean Underline Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#B08D57]" />
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#B08D57]">
                Client Journal
              </span>
            </div>
            <h2 className="marcellus-sc text-3xl sm:text-4xl md:text-5xl font-bold text-[#6B4423] leading-tight tracking-wide">
              Celebrated <span className="italic font-normal">Love Stories</span>
            </h2>
          </div>

          {/* Underline Filter Tabs */}
          <div className="flex gap-6 border-b border-[#D9C8A9] pb-3 overflow-x-auto scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveTab(tag);
                  setFeaturedIndex(0);
                }}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 relative whitespace-nowrap pb-1 ${
                  activeTab === tag
                    ? "text-[#6B4423]"
                    : "text-[#6B4423]/50 hover:text-[#6B4423]"
                }`}
              >
                {tag}
                {activeTab === tag && (
                  <span className="absolute left-0 right-0 -bottom-[13px] h-[2px] bg-[#6B4423]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Unique Editorial Showcase: Grand Feature Card (Left) + Minimalist List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Featured Highlight Spread (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D9C8A9] p-8 sm:p-12 relative flex flex-col justify-between shadow-xl overflow-hidden group">
            
            {/* Background Index Number Stamp */}
            <span
              className="absolute -bottom-8 -right-0 marcellus-sc font-bold text-[3rem] text-[#F5EDE0] select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
              style={{ lineHeight: 2.3 }}
            >
              0{featuredIndex + 1}
            </span>

            <div className="relative z-10">
              {/* Top Tag & Date Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#D9C8A9]">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#FFFFFF] bg-[#6B4423] px-3 py-1">
                    {activeReview?.tag}
                  </span>
                  <span className="text-xs text-[#6B4423]/60 italic">
                    — {activeReview?.highlight}
                  </span>
                </div>

                <div className="flex gap-1">
                  {[...Array(activeReview?.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#6B4423] text-[#6B4423]"
                    />
                  ))}
                </div>
              </div>

              {/* Giant Quote Icon */}
              <Quote className="w-12 h-12 text-[#D9C8A9] mb-6" />

              {/* Main Testimonial Body */}
              <p className="marcellus-sc italic text-xl sm:text-xl text-[#6B4423] leading-relaxed mb-10 font-medium">
                "{activeReview?.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="relative z-10 pt-6 border-t border-[#D9C8A9]/60 flex items-end justify-between">
              <div>
                <h3 className="marcellus-sc text-lg font-bold text-[#6B4423] tracking-wide">
                  {activeReview?.name}
                </h3>
                <p className="text-xs text-[#6B4423]/60 font-light mt-0.5">
                  {activeReview?.role}
                </p>
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6B4423]/50">
                {activeReview?.date}
              </span>
            </div>
          </div>

          {/* Interactive Preview List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {filteredReviews.map((review, idx) => {
              const isActive = featuredIndex === idx;

              return (
                <div
                  key={review.id}
                  onClick={() => setFeaturedIndex(idx)}
                  className={`cursor-pointer p-6 border transition-all duration-300 relative flex items-center justify-between ${
                    isActive
                      ? "bg-[#FFFFFF] border-[#6B4423] shadow-md translate-x-1"
                      : "bg-[#FFFFFF]/60 border-[#D9C8A9] hover:bg-[#FFFFFF] hover:border-[#6B4423]/60"
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  {isActive && (
                    <span className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#6B4423]" />
                  )}

                  <div className="pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B4423]/50">
                        0{idx + 1}
                      </span>
                      <span className="w-2 h-[1px] bg-[#D9C8A9]" />
                      <span className="text-[10px] uppercase font-semibold text-[#6B4423]">
                        {review.tag}
                      </span>
                    </div>

                    <h4 className="marcellus-sc font-bold text-sm text-[#6B4423]">
                      {review.name}
                    </h4>

                    <p className="text-xs text-[#6B4423]/70 font-light line-clamp-1 mt-1 italic">
                      "{review.quote}"
                    </p>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isActive
                        ? "text-[#6B4423] translate-x-1"
                        : "text-[#D9C8A9]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}