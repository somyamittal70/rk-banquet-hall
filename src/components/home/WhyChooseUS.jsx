import React from "react";
import { Sparkles, ChefHat, CalendarCheck, MapPin, Gem, Users, ArrowUpRight } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Sparkles,
      title: "Elegant, Timeless Décor",
      description:
        "Every hall is dressed with fresh florals, warm lighting, and detailing that photographs beautifully and feels grand in person.",
    },
    {
      icon: ChefHat,
      title: "Exceptional Catering",
      description:
        "Multi-cuisine menus crafted by experienced chefs, with tastings available before you finalize your package.",
    },
    {
      icon: CalendarCheck,
      title: "Dedicated Event Planning",
      description:
        "A personal coordinator manages timelines, vendors, and logistics — so you're a guest at your own event, not the manager.",
    },
    {
      icon: MapPin,
      title: "Prime, Accessible Location",
      description:
        "Centrally located with ample parking and easy access for guests travelling from across the city.",
    },
    {
      icon: Gem,
      title: "Flexible Premium Packages",
      description:
        "From intimate engagements to grand receptions, packages scale to your guest list and budget without cutting on quality.",
    },
    {
      icon: Users,
      title: "Capacity for Every Occasion",
      description:
        "Multiple hall configurations seat anywhere from 100 to 1000+ guests, indoors or with an open-air terrace option.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#F5EDE0]/30 font-poppins overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#B08D57]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-[#6B4423]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2E2013]/10 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-[#B08D57]" />
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#B08D57]">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-cormonant font-semibold text-[#2E2013] leading-tight">
              Built for moments <br />
              <span className="italic text-[#6B4423]">that matter most.</span>
            </h2>
          </div>
          
          <p className="max-w-md text-sm sm:text-base text-[#2E2013]/80 leading-relaxed">
            From the first walkthrough to the last dance, every detail is meticulously planned so your celebration feels completely effortless.
          </p>
        </div>

        {/* Feature Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2E2013]/10 hover:border-[#B08D57]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDE0]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Icon & Counter Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#F5EDE0] text-[#6B4423] flex items-center justify-center group-hover:bg-[#6B4423] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#B08D57] bg-[#F5EDE0]/60 px-2.5 py-1 rounded-full border border-[#B08D57]/20">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-cormonant font-bold text-[#2E2013] mb-3 group-hover:text-[#6B4423] transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#2E2013]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Micro-Interaction Line */}
                <div className="mt-8 pt-4 border-t border-[#2E2013]/5 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B08D57] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Premium Standard
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#B08D57] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}