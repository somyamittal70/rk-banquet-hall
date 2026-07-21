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
      // icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "02",
      title: "Wedding Catering",
      desc: "Delight your guests with an exceptional dining experience featuring customized multi-cuisine menus, live food stations, and impeccable hospitality crafted by expert chefs.",
      // icon: Utensils,
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "03",
      title: "Elegant Decorations",
      desc: "From breathtaking floral arrangements to luxurious stage designs and ambient lighting, we create stunning wedding décor tailored to your unique style and vision.",
      // icon: GlassWater,
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "04",
      title: "Engagement & Reception",
      desc: "Host memorable engagement ceremonies and grand wedding receptions with personalized themes, premium seating arrangements, and flawless event coordination.",
      // icon: Music,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "05",
      title: "Photography & Videography",
      desc: "Capture every precious moment with our trusted photography and cinematic videography partners, ensuring memories that will be cherished for generations.",
      // icon: Camera,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    },
    {
      num: "06",
      title: "Complete Event Planning",
      desc: "Our experienced event planners manage every detail—from décor and entertainment to guest hospitality—so you can enjoy your celebration without worry.",
      // icon: ShieldCheck,
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
  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     const nextIndex = (activeIndex + 1) % luxuryServices.length;
  //     scrollToCard(nextIndex);
  //   }, 3000); // Transitions automatically every 3 seconds

  //   return () => clearInterval(slideInterval);
  // }, [activeIndex, luxuryServices.length]);

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
    <section className="relative bg-[#F5EDE0] text-[#6B4423] font-poppins py-24 lg:py-32 overflow-hidden border-b border-[#D9C8A9]">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Slide Navigation controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="marcellus-sc text-3xl sm:text-4xl md:text-5xl font-bold text-[#6B4423] leading-tight tracking-wide">
              Everything You Need For A{" "}
              <span className="text-[#6B4423]/80">
                Perfect Wedding Celebration
              </span>
            </h2>
          </div>

          {/* Slider Controller Navigation Knobs */}
          <div className="flex space-x-4 self-end md:self-auto">
            <button
              onClick={() => handleManualScroll("prev")}
              className="w-12 h-12 rounded-none border border-[#D9C8A9] text-[#6B4423] bg-[#FFFFFF] hover:bg-[#6B4423] hover:text-[#FFFFFF] transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 mx-auto" />
            </button>
            <button
              onClick={() => handleManualScroll("next")}
              className="w-12 h-12 rounded-none border border-[#D9C8A9] text-[#6B4423] bg-[#FFFFFF] hover:bg-[#6B4423] hover:text-[#FFFFFF] transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 mx-auto" />
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
                className="snap-start shrink-0 w-[290px] sm:w-[340px] group relative bg-[#FFFFFF] border border-[#D9C8A9] overflow-hidden shadow-md transition-all duration-500 ease-out hover:shadow-xl hover:border-[#6B4423]"
              >
                {/* Visual Image Header Window Container */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Icon Badging layer */}
                  {/* <div className="absolute top-4 right-4 w-10 h-10 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#D9C8A9] flex items-center justify-center text-[#6B4423] group-hover:bg-[#6B4423] group-hover:text-[#FFFFFF] transition-all duration-300 shadow-sm">
                    <IconComponent strokeWidth={1.5} className="w-4 h-4" />
                  </div> */}
                </div>

                {/* Content Block Area */}
                <div className="p-4 sm:p-8 flex flex-col justify-between min-h-[240px]">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="marcellus-sc text-lg font-bold text-[#6B4423]/40">
                        {service.num}
                      </span>
                      <span className="w-8 h-[1px] bg-[#D9C8A9]" />
                    </div>

                    <h3 className="marcellus-sc text-lg font-semibold text-[#6B4423] tracking-wider mb-3 group-hover:text-[#6B4423] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-[#6B4423]/70 text-xs sm:text-sm leading-relaxed font-light line-clamp-3 group-hover:text-[#6B4423] transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <a
                    href="/services"
                    className="mt-6 inline-flex items-center gap-2 justify-center border border-[#D9C8A9] bg-[#6B4423] px-3 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFFFFF] shadow-md transition-all duration-300 hover:bg-[#F5EDE0] hover:text-[#6B4423] hover:border-[#6B4423]"
                  >
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

        {/* Global Progress Tracking Dots Line Indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {luxuryServices.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-[3px] transition-all duration-500 focus:outline-none ${
                idx === activeIndex
                  ? "w-8 bg-[#6B4423]"
                  : "w-2 bg-[#D9C8A9] hover:bg-[#6B4423]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}