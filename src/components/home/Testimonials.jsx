import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

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
        "Our wedding day was nothing short of magical. The beautiful décor, exceptional hospitality, and seamless event planning made every moment unforgettable. Our guests couldn't stop praising the stunning venue and delicious food.",
      rating: 5,
      date: "February 2026",
    },
    {
      id: 2,
      tag: "Reception",
      name: "Aman & Neha Verma",
      role: "Newly Married Couple",
      quote:
        "From the grand entrance to the elegant reception setup, everything exceeded our expectations. The team managed every detail perfectly, allowing us to enjoy our special day without any worries.",
      rating: 5,
      date: "April 2026",
    },
    {
      id: 3,
      tag: "Engagement",
      name: "Rohan & Simran Kapoor",
      role: "Couple",
      quote:
        "The engagement ceremony was beautifully organized with elegant floral décor, excellent catering, and warm hospitality. It was truly the perfect beginning to our wedding journey.",
      rating: 5,
      date: "June 2026",
    },
    {
      id: 4,
      tag: "Wedding",
      name: "Arjun & Meera Singh",
      role: "Bride & Groom",
      quote:
        "Choosing RK Banquet Hall was the best decision we made. The luxurious ambiance, professional staff, and attention to every detail made our wedding a dream come true. We will cherish these memories forever.",
      rating: 5,
      date: "July 2026",
    },
  ];
  const filteredReviews =
    activeTab === "All"
      ? reviews
      : reviews.filter((rev) => rev.tag === activeTab);

  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F6F2] font-poppins py-24 lg:py-32 overflow-hidden border-t border-[#C8A96A]/10">
      {/* Editorial Decorative Background Element */}
      <div className="absolute right-0 top-10 text-[12rem] font-cinzelDecorative font-bold text-white/[0.02] select-none pointer-events-none hidden lg:block">
        Testimonials
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C8A96A]" />
              <span className="font-cinzel text-xs tracking-[0.4em] text-[#C8A96A] uppercase font-bold">
                Happy Couples
              </span>
            </div>
            <h2 className="font-cinzelDecorative text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              Love Stories Shared By
              <span className="text-[#C8A96A]"> Our Happy Couples</span>
            </h2>
          </div>

          {/* Luxury Filter Sub-menu */}
          <div className="flex flex-wrap gap-2 border-b border-white/5 pb-2 md:pb-0 md:border-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTab(tag)}
                className={`py-1 px-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                  activeTab === tag
                    ? "border-[#C8A96A] text-[#C8A96A] bg-[#C8A96A]/5"
                    : "border-transparent text-gray-500 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredReviews.map((review, index) => (
            <div
              key={review.id}
              className={`group relative bg-[#1A1A1A] p-8 sm:p-10 border border-white/[0.03] transition-all duration-500 hover:border-[#C8A96A]/30 ${
                index === 1 ? "md:mt-12" : index === 2 ? "md:-mt-12" : ""
              }`}
            >
              {/* Top Row Elements */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.h-3 fill-[#C8A96A] text-[#C8A96A]"
                      />
                    ))}
                  </div>
                  <span className="font-cinzel text-[10px] tracking-widest text-[#C8A96A] uppercase font-medium bg-[#C8A96A]/10 px-2 py-0.5 rounded-none">
                    {review.tag}
                  </span>
                </div>
                <Quote className="w-8 h-8 text-white/[0.04] group-hover:text-[#C8A96A]/10 transition-colors duration-500" />
              </div>

              {/* Review Text Body */}
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed italic mb-8 group-hover:text-gray-200 transition-colors duration-300">
                "{review.quote}"
              </p>

              {/* Author Footer Layout */}
              <div className="pt-6 border-t border-white/[0.05] flex justify-between items-center">
                <div>
                  <h4 className="font-cinzel text-sm sm:text-base font-semibold text-white tracking-wide">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">
                    {review.role}
                  </p>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-medium text-gray-600 font-cinzel">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
