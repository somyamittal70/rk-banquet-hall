import React, { useState, useRef } from "react";
import {
  // Sparkles,
  // Utensils,
  // GlassWater,
  // Music,
  // Camera,
  // ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const luxuryServices = [
    {
      num: "01",
      title: "Luxury Wedding Venue",
      category: "Venue & Ambiance",
      desc: "Celebrate your special day in our magnificent banquet hall featuring elegant interiors, grand décor, spacious seating, and a sophisticated ambiance designed for unforgettable weddings.",
      // icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "02",
      title: "Wedding Catering",
      category: "Culinary Experience",
      desc: "Delight your guests with an exceptional dining experience featuring customized multi-cuisine menus, live food stations, and impeccable hospitality crafted by expert chefs.",
      // icon: Utensils,
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "03",
      title: "Elegant Decorations",
      category: "Floral & Lighting",
      desc: "From breathtaking floral arrangements to luxurious stage designs and ambient lighting, we create stunning wedding décor tailored to your unique style and vision.",
      // icon: GlassWater,
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "04",
      title: "Engagement & Reception",
      category: "Special Ceremonies",
      desc: "Host memorable engagement ceremonies and grand wedding receptions with personalized themes, premium seating arrangements, and flawless event coordination.",
      // icon: Music,
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "05",
      title: "Photography & Videography",
      category: "Cinematic Coverage",
      desc: "Capture every precious moment with our trusted photography and cinematic videography partners, ensuring memories that will be cherished for generations.",
      // icon: Camera,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    },
    {
      num: "06",
      title: "Complete Event Planning",
      category: "Turnkey Management",
      desc: "Our experienced event planners manage every detail—from décor and entertainment to guest hospitality—so you can enjoy your celebration without worry.",
      // icon: ShieldCheck,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    },
  ];

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
    <section className="relative bg-[#F5EDE0] text-[#21160e] font-poppins py-20 sm:py-20 lg:py-22 overflow-hidden border-b border-[#D9C8A9]">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#B08D57]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#B08D57]" />
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#B08D57]">
                Our Services
              </span>
            </div>
            <h2 className="marcellus-sc text-3xl sm:text-4xl md:text-5xl font-bold text-[#21160e] leading-tight tracking-wide">
              Crafted For Your <span className="text-[#B08D57] font-normal">Dream Wedding</span>
            </h2>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleManualScroll("prev")}
              className="w-12 h-12 rounded-full border border-[#D9C8A9] bg-white flex items-center justify-center text-[#21160e] hover:bg-[#21160e] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("next")}
              className="w-12 h-12 rounded-full border border-[#D9C8A9] bg-white flex items-center justify-center text-[#21160e] hover:bg-[#21160e] hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Filmstrip Track */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {luxuryServices.map((service, index) => {
            // const IconComponent = service.icon;

            return (
              <div
                key={index}
                className="snap-start shrink-0 w-[300px] sm:w-[380px] group relative h-[480px] rounded-3xl overflow-hidden border border-[#D9C8A9] bg-[#21160e] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Background Image with Hover Scale */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-60"
                />

                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21160e] via-[#21160e]/50 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="marcellus-sc text-sm font-bold tracking-widest text-[#F5EDE0] bg-[#21160e]/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    {service.num}
                  </span>

                  {/* <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#21160e] group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-4 h-4" />
                  </div> */}
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#B08D57] mb-1">
                    {service.category}
                  </span>

                  <h3 className="marcellus-sc text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light line-clamp-3 mb-6 opacity-90">
                    {service.desc}
                  </p>

                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5EDE0] group-hover:text-[#B08D57] transition-colors duration-300"
                  >
                    <span>Discover More</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Progress Bar Bar */}
        <div className="w-full max-w-xs mx-auto mt-8 bg-[#D9C8A9]/40 h-1 rounded-full overflow-hidden">
          <div
            className="bg-[#21160e] h-full transition-all duration-500 rounded-full"
            style={{
              width: `${((activeIndex + 1) / luxuryServices.length) * 100}%`,
            }}
          />
        </div>

      </div>
    </section>
  );
}