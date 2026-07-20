import React, { useState, useEffect, useRef } from "react";
import {
  GlassWater,
  Utensils,
  Sparkles,
  Music,
  Camera,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const luxuryServices = [
    {
      num: "01",
      title: "Luxury Wedding Venue",
      desc: "Celebrate your special day in our magnificent banquet hall featuring elegant interiors, grand décor, spacious seating, and a sophisticated ambiance designed for unforgettable weddings.",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "02",
      title: "Wedding Catering",
      desc: "Delight your guests with an exceptional dining experience featuring customized multi-cuisine menus, live food stations, and impeccable hospitality crafted by expert chefs.",
      icon: Utensils,
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "03",
      title: "Elegant Decorations",
      desc: "From breathtaking floral arrangements to luxurious stage designs and ambient lighting, we create stunning wedding décor tailored to your unique style and vision.",
      icon: GlassWater,
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "04",
      title: "Engagement & Reception",
      desc: "Host memorable engagement ceremonies and grand wedding receptions with personalized themes, premium seating arrangements, and flawless event coordination.",
      icon: Music,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "05",
      title: "Photography & Videography",
      desc: "Capture every precious moment with our trusted photography and cinematic videography partners, ensuring memories that will be cherished for generations.",
      icon: Camera,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "06",
      title: "Complete Event Planning",
      desc: "Our experienced event planners manage every detail—from décor and entertainment to guest hospitality—so you can enjoy your celebration without worry.",
      icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Logic for Auto-Scrolling positions
  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.children[index];
      if (cardElement) {
        scrollContainerRef.current.scrollTo({
          left: cardElement.offsetLeft - scrollContainerRef.current.offsetLeft,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    }
  };

  // Setup the Auto Slide interval effect loop
  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % luxuryServices.length;
      scrollToCard(nextIndex);
    }, 3000); // Transitions automatically every 4 seconds

    return () => clearInterval(slideInterval);
  }, [activeIndex, luxuryServices.length]);

  const handleManualScroll = (direction) => {
    let targetIndex = activeIndex;
    if (direction === "next") {
      targetIndex = (activeIndex + 1) % luxuryServices.length;
    } else {
      targetIndex =
        (activeIndex - 1 + luxuryServices.length) % luxuryServices.length;
    }
    scrollToCard(targetIndex);
  };

  return (
    <section className="relative bg-[#0F0F0F] text-[#F8F6F2] font-poppins py-24 lg:py-32 overflow-hidden border-b border-[#C8A96A]/20">
      {/* Background Micro Accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-[#C8A96A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Slide Navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-cinzelDecorative text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              Everything You Need For A{" "}
              <span className="text-[#C8A96A]">
                Perfect Wedding Celebration
              </span>
            </h2>
          </div>

          {/* Slider Controller Navigation Knobs */}
          <div className="flex space-x-4 self-end md:self-auto">
            <button
              onClick={() => handleManualScroll("prev")}
              className="w-12 h-12 rounded-none border border-[#C8A96A]/40 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("next")}
              className="w-12 h-12 rounded-none border border-[#C8A96A]/40 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider Layout Window */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {luxuryServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="snap-start shrink-0 w-[290px] sm:w-[340px] group relative bg-[#1A1A1A] border border-[#6B7280]/10 overflow-hidden transition-all duration-500 ease-out hover:border-[#C8A96A]/40"
              >
                {/* Visual Image Header Window Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" /> */}

                  {/* Floating Icon Badging layer */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#0F0F0F]/90 backdrop-blur-sm border border-[#C8A96A]/30 flex items-center justify-center text-[#C8A96A] group-hover:bg-[#A67C3D] group-hover:text-white transition-all duration-300">
                    <IconComponent strokeWidth={1.5} className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Block Area */}
                <div className="p-4 sm:p-8 flex flex-col justify-between min-h-[240px]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-cinzelDecorative text-lg font-bold text-[#C8A96A]/40">
                        {service.num}
                      </span>
                      <span className="w-8 h-[1px] bg-[#6B7280]/20" />
                    </div>

                    <h3 className="font-cinzel text-lg font-semibold text-white tracking-wider mb-3 group-hover:text-[#C8A96A] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed font-light line-clamp-3 group-hover:text-[#F8F6F2]/90 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>

                  {/* Micro Text Action Trigger */}
                  <a
                  href="/services"
                   className="mt-4 inline-flex items-center gap-2 justify-center border border-[#C8A96A]/40 bg-gradient-to-r from-[#A67C3D] to-[#C8A96A] px-3 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#C8A96A]/30 hover:from-[#C8A96A] hover:to-[#A67C3D]">
                    <span>Discover More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Progress Tracking Dots Line indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {luxuryServices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-[3px] transition-all duration-500 focus:outline-none ${
                idx === activeIndex
                  ? "w-8 bg-[#C8A96A]"
                  : "w-2 bg-gray-800 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
