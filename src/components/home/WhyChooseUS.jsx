import React from "react";
import { Sparkles, ChefHat, CalendarCheck, MapPin, Gem, Users } from "lucide-react";

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
    <section
      className="relative py-24 lg:py-32 bg-white"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span
            className="text-xs uppercase font-semibold tracking-[0.35em]"
            style={{ color: "#B08D57" }}
          >
            Why Choose Us
          </span>
          <h2
            className="mt-3 text-4xl sm:text-5xl leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#6B4423",
              fontWeight: 600,
            }}
          >
            Built for moments
            <br />
            that matter
          </h2>
          <p
            className="mt-5 text-base leading-relaxed"
            style={{ color: "#2E2013CC" }}
          >
            From the first walkthrough to the last dance, every detail is
            planned so your celebration feels effortless.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="group">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: "#F5EDE0" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "#6B4423" }}
                    strokeWidth={1.75}
                  />
                </div>
                <h3
                  className="text-lg font-bold mb-2 tracking-wide"
                  style={{ color: "#6B4423" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#2E2013B3" }}
                >
                  {feature.description}
                </p>
                <div
                  className="mt-5 h-[2px] w-10 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: "#B08D57" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}