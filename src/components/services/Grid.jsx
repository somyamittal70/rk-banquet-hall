import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ServiceGrid() {
  const services = [
    {
      num: "01",
      title: "Wedding Celebrations",
      subtitle: "Elegant & Memorable Weddings",
      image:
        "https://i.pinimg.com/control1/1200x/53/35/fb/5335fb9c1de851faec8ddc2dd3d6f744.jpg",
      desc: "Celebrate your dream wedding in our beautifully designed banquet hall. From stunning décor and spacious seating to customized catering and flawless event management, we ensure every wedding becomes a cherished memory.",
      specs: [
        "Spacious Banquet Hall",
        "Customized Wedding Décor",
        "Premium Catering Services",
      ],
    },
    {
      num: "02",
      title: "Corporate Events",
      subtitle: "Professional Business Gatherings",
      image:
        "https://i.pinimg.com/1200x/c7/2e/7c/c72e7c451c58d102c4247a107354be90.jpg",
      desc: "Host conferences, seminars, product launches, award ceremonies, and business meetings in a sophisticated venue equipped with modern amenities and professional event support.",
      specs: [
        "Audio & Visual Setup",
        "High-Speed Wi-Fi",
        "Comfortable Seating",
      ],
    },
    {
      num: "03",
      title: "Birthday Parties",
      subtitle: "Joyful Celebrations for Every Age",
      image:
        "https://i.pinimg.com/control1/1200x/10/57/d6/1057d6c7581131824cc92644f3ddc2a5.jpg",
      desc: "Whether it's a child's birthday, a milestone celebration, or a surprise party, our banquet hall offers vibrant décor, delicious food, and entertainment arrangements to make your day unforgettable.",
      specs: ["Theme Decorations", "Live Entertainment", "Customized Menu"],
    },
    {
      num: "04",
      title: "Engagement & Reception",
      subtitle: "Celebrate New Beginnings",
      image:
        "https://i.pinimg.com/1200x/e2/49/e5/e249e503140632c1321251e4e5f88405.jpg",
      desc: "Create unforgettable engagement ceremonies and wedding receptions with elegant interiors, luxurious décor, and personalized hospitality tailored to your special occasion.",
      specs: [
        "Elegant Stage Setup",
        "Floral Decorations",
        "Luxury Dining Experience",
      ],
    },
    {
      num: "05",
      title: "Family Functions",
      subtitle: "Celebrate Every Precious Moment",
      image:
        "https://i.pinimg.com/control1/1200x/7e/c8/2a/7ec82afa10f4975a06e4f12bbd456790.jpg",
      desc: "From anniversaries and baby showers to retirement parties and festive gatherings, we provide the perfect venue for celebrating life's special moments with family and friends.",
      specs: [
        "Flexible Seating Arrangements",
        "Traditional & Modern Décor",
        "Complete Event Assistance",
      ],
    },
    {
      num: "06",
      title: "Social & Cultural Events",
      subtitle: "Perfect Venue for Every Occasion",
      image:
        "https://i.pinimg.com/736x/bf/a1/22/bfa122af88316d64145065bfdc1f77ba.jpg",
      desc: "Our banquet hall is an ideal destination for cultural programs, exhibitions, festive celebrations, community events, and social gatherings with exceptional hospitality and premium facilities.",
      specs: [
        "Large Event Capacity",
        "Modern Lighting & Sound",
        "Dedicated Event Team",
      ],
    },
  ];

  return (
    <div className="font-poppins overflow-hidden">
      {/* Alternating Row Sections Layout with Motion */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const isLight = isEven;

        return (
          <section
            key={index}
            className={`py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 transition-colors duration-500 border-b ${
              isLight
                ? "bg-[#F5EDE0] text-[#2E2013] border-[#D9C8A9]/40"
                : "bg-[#21160e] text-[#F8F6F2] border-white/5"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
                {/* Visual Column Block with Motion */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`col-span-1 lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <ParallaxImageFrame
                    src={service.image}
                    alt={service.title}
                    isLight={isLight}
                  />
                </motion.div>

                {/* Content Column Block with Staggered Motion */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className={`col-span-1 lg:col-span-6 flex flex-col justify-center min-w-0 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Micro Index Tracker */}
                  <div className="flex items-baseline space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <span
                      className={`font-cormonant text-3xl sm:text-4xl md:text-5xl font-bold ${
                        isLight ? "text-[#21160e]/25" : "text-[#C8A96A]/20"
                      }`}
                    >
                      {service.num}
                    </span>
                    <span
                      className={`h-[1px] w-8 sm:w-12 shrink-0 ${
                        isLight ? "bg-[#21160e]/30" : "bg-[#C8A96A]/30"
                      }`}
                    />
                    <span
                      className={`font-cormonant text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold ${
                        isLight ? "text-[#21160e]" : "text-[#C8A96A]"
                      }`}
                    >
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3
                    className={`font-cormonant text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide mb-4 sm:mb-6 ${
                      isLight ? "text-[#2E2013]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Core Description Text */}
                  <p
                    className={`font-light text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 ${
                      isLight ? "text-[#2E2013]/80" : "text-gray-400"
                    }`}
                  >
                    {service.desc}
                  </p>

                  {/* Technical Spec Chips Row — always a single line, scrolls horizontally if needed */}
                  <div
                    className={`flex flex-nowrap gap-2 pt-5 sm:pt-6 border-t overflow-x-auto -mx-1 px-1 scrollbar-none ${
                      isLight ? "border-[#21160e]/10" : "border-white/[0.05]"
                    }`}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {service.specs.map((spec, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        className={`shrink-0 whitespace-nowrap text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold px-2.5 sm:px-3.5 py-1.5 sm:py-2 ${
                          isLight
                            ? "border border-[#21160e]/20 text-[#21160e] bg-[#FFFFFF]/60"
                            : "border border-white/10 text-gray-300 bg-white/[0.02]"
                        }`}
                      >
                        {spec}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Hide scrollbar for the single-line spec chips row (WebKit browsers) */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

// Subcomponent for the Interactive 3D Parallax Window Effect
function ParallaxImageFrame({ src, alt, isLight }) {
  const frameRef = useRef(null);

  const x = useSpring(0, { stiffness: 100, damping: 25 });
  const y = useSpring(0, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);
  const imgX = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const imgY = useTransform(y, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    // Disable the tilt/parallax effect on touch devices (no real hover there anyway)
    if (window.matchMedia("(hover: none)").matches) return;
    const rect = frameRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`w-full aspect-[4/3] overflow-hidden relative cursor-none group shadow-2xl rounded-sm transition-colors duration-300 ${
        isLight
          ? "bg-[#EADBC8] border border-[#D9C8A9]"
          : "bg-[#121212] border border-white/10"
      }`}
    >
      {/* Dynamic Parallaxing Image Asset */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ x: imgX, y: imgY, scale: 1.12 }}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
      />

      {/* Luxury Color Grading Filter */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-[#2E2013]/30 via-transparent to-transparent"
            : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
        }`}
      />

      {/* Inner Frame Offset */}
      <div
        className={`absolute inset-0 border-[8px] sm:border-[12px] pointer-events-none transition-transform duration-500 group-hover:scale-[0.97] ${
          isLight ? "border-[#F5EDE0]/80" : "border-[#D9C8A9]"
        }`}
      />

      {/* Floating Corner Accent Line */}
      <div
        className={`absolute top-4 left-4 sm:top-6 sm:left-6 w-4 h-4 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isLight ? "border-[#21160e]" : "border-[#C8A96A]"
        }`}
      />
      <div
        className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-4 h-4 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isLight ? "border-[#21160e]" : "border-[#C8A96A]"
        }`}
      />
    </motion.div>
  );
}