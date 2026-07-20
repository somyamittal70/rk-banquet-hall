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
    <section className="relative bg-[#0A0A0A] text-[#F8F6F2] font-poppins py-24 lg:py-36 overflow-hidden">
      {/* Background Architectural Watermark */}
      {/* <div className="absolute right-0 top-1/3 text-[25vw] font-bold font-cinzelDecorative text-white/[0.01] pointer-events-none select-none tracking-widest leading-none">
        SPACE
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header Section */}
        <div className="max-w-3xl mb-24 lg:mb-36">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C8A96A]" />
            <span className="font-cinzel text-xs tracking-[0.5em] text-[#C8A96A] uppercase font-bold">
              Our Services
            </span>
          </div>
          <h2 className="font-cinzelDecorative text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-wide">
            Exceptional Venues
            <br />
            For <span className="text-[#C8A96A]">Every Celebration</span>
          </h2>
        </div>

        {/* Staggered Row Blocks Layout */}
        <div className="space-y-32 lg:space-y-48">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}
              >
                {/* Visual Column Block */}
                <div
                  className={`col-span-1 lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <ParallaxImageFrame src={service.image} alt={service.title} />
                </div>

                {/* Content Column Block */}
                <div
                  className={`col-span-1 lg:col-span-6 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  {/* Micro Index Tracker */}
                  <div className="flex items-baseline space-x-4 mb-4">
                    <span className="font-cinzelDecorative text-4xl md:text-5xl font-bold text-[#C8A96A]/20">
                      {service.num}
                    </span>
                    <span className="h-[1px] w-12 bg-[#C8A96A]/30" />
                    <span className="font-cinzel text-xs tracking-[0.3em] text-[#C8A96A] uppercase font-bold">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-wide mb-6">
                    {service.title}
                  </h3>

                  {/* Core Description Text */}
                  <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  {/* Technical Spec Chips Row */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.05]">
                    {service.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] tracking-widest uppercase font-medium border border-white/10 text-gray-300 px-3 py-2 bg-white/[0.02]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Subcomponent for the Interactive 3D Parallax Window Effect
function ParallaxImageFrame({ src, alt }) {
  const frameRef = useRef(null);

  const x = useSpring(0, { stiffness: 100, damping: 25 });
  const y = useSpring(0, { stiffness: 100, damping: 25 });

  const rotateX = useTransform(y, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-7, 7]);
  const imgX = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const imgY = useTransform(y, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
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
      className="w-full aspect-[4/3] overflow-hidden bg-[#121212] border border-white/10 relative cursor-none group shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
    >
      {/* Dynamic Parallaxing Image Asset */}
      <motion.img
        src={src}
        alt={alt}
        style={{ x: imgX, y: imgY, scale: 1.12 }}
        className="w-full h-full object-cover opacity-80 grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 pointer-events-none select-none"
      />

      {/* Luxury Color Grading Filter */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 border-[12px] border-[#0A0A0A] pointer-events-none transition-transform duration-500 group-hover:scale-[0.97]" />

      {/* Subtle Floating Corner Accent Line */}
      <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-[#C8A96A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-[#C8A96A] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
