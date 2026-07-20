import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Layers3, DraftingCompass, Sparkles } from "lucide-react";

export default function AboutJourney() {
  const steps = [
    {
      phase: "Step 01",
      icon: DraftingCompass,
      title: "Plan Your Dream Celebration",
      timeframe: "Initial Consultation",
      desc: "Meet with our experienced event specialists to discuss your vision, guest list, preferred theme, and every detail of your special day. We work closely with you to create a celebration that reflects your unique love story.",
    },
    {
      phase: "Step 02",
      icon: Layers3,
      title: "Design Every Beautiful Detail",
      timeframe: "Planning & Preparation",
      desc: "From elegant floral décor and luxurious seating arrangements to customized catering and entertainment, every element is carefully planned to create a seamless and unforgettable wedding experience.",
    },
    {
      phase: "Step 03",
      icon: Sparkles,
      title: "Celebrate Your Perfect Day",
      timeframe: "Wedding Day",
      desc: "Relax and cherish every moment while our dedicated team manages every detail with precision. From welcoming your guests to the final farewell, we ensure your wedding day is truly magical and stress-free.",
    },
  ];
  return (
    <section className="relative bg-[#0A0A0A] text-[#F8F6F2] font-poppins py-24 lg:py-32 overflow-hidden border-t border-[#C8A96A]/10">
      {/* Structural Background Geometry (Blueprint effect) */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#6B7280"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative Radial Lighting */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#C8A96A]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with Staggered Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-6 h-[1px] bg-[#C8A96A]/40" />
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#C8A96A] uppercase font-bold">
              Our Process
            </span>
            <span className="w-6 h-[1px] bg-[#C8A96A]/40" />
          </div>
          <h2 className="font-cinzelDecorative text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-wide">
            Your Journey To
            <br />
            <span className="text-[#C8A96A]">The Perfect Wedding</span>
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg mt-6 leading-relaxed max-w-xl mx-auto">
            From your first consultation to the final celebration, we carefully plan every detail to create a wedding experience filled with elegance, joy, and unforgettable memories.
          </p>
        </motion.div>

        {/* Staggered Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Subtle connecting line behind cards */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/[0.05] z-0 hidden md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative z-10 ${index === 1 ? "md:mt-16" : ""}`} // Stagger center card down
              >
                <JourneyCard step={step} Icon={Icon} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Subcomponent for the 3D Interactive Card
function JourneyCard({ step, Icon, index }) {
  const cardRef = useRef(null);

  // Framer Motion 3D Hover Effect Logic
  const x = useSpring(0, { stiffness: 150, damping: 20 });
  const y = useSpring(0, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="bg-[#121212] border border-white/[0.04] p-8 lg:p-10 relative group transition-colors duration-500 hover:border-[#C8A96A]/30 flex flex-col h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* 3D Depth Elements */}
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {/* Header Block */}
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/[0.03]">
          <div>
            <div className="flex items-center space-x-2 text-[#C8A96A] font-cinzel text-xs font-bold tracking-widest mb-1">
              <span>{step.phase}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/60 font-poppins font-light tracking-normal">
                {step.timeframe}
              </span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl text-white font-medium tracking-wide">
              {step.title}
            </h3>
          </div>

          {/* Icon Box */}
          <div className="w-16 h-16 shrink-0 border border-[#C8A96A]/20 bg-[#0A0A0A] flex items-center justify-center text-[#C8A96A] group-hover:bg-[#C8A96A] group-hover:text-black transition-all duration-500 group-hover:scale-110">
            <Icon strokeWidth={1.2} className="w-7 h-7" />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 group-hover:text-gray-200 font-light text-sm sm:text-base leading-relaxed transition-colors duration-300">
          {step.desc}
        </p>
      </div>

      {/* Decorative corner asset (blueprint feel) */}
      <div className="absolute bottom-2 right-2 font-cinzelDecorative text-6xl font-bold text-white/[0.01] select-none group-hover:text-[#C8A96A]/5 transition-colors duration-500">
        {index + 1}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(400px_at_50%_50%,rgba(200,169,106,0.1),transparent)] pointer-events-none" />
    </motion.div>
  );
}
