import React from "react";
import { Award, Users, Calendar } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-[#F8F6F2] text-[#2D2D2D] font-poppins py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#C8A96A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[#A67C3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Premium Editorial Image Grid */}
          <div className="lg:col-span-6 relative">
            {/* Decorative Gold Frame Backdrop */}
            <div className="absolute -top-4 -left-4 w-2/3 h-3/4 border-2 border-[#C8A96A]/30 translate-x-4 translate-y-4 pointer-events-none hidden sm:block" />

            {/* Main Primary Image */}
            <div className="relative z-10 overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                alt="RK Banquet Hall Luxury Setting"
                className="w-full h-[450px] object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#0F0F0F]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="absolute -bottom-12 -right-6 w-1/2 hidden sm:block z-20 overflow-hidden border-8 border-[#F8F6F2] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80"
                alt="Gourmet Catering Detail"
                className="w-full h-[250px] object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Experience Badge Floating Layer */}
            <div className="absolute -top-6 right-6 z-30 bg-[#0F0F0F] text-white p-6 border-b-4 border-[#C8A96A] shadow-xl text-center min-w-[120px]">
              <span className="block font-cinzel text-3xl font-bold text-[#C8A96A]">
                15+
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-medium text-white/80 mt-1">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* Right Column: Content Architecture */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* Heading */}
            <h2 className="font-cinzelDecorative text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F0F0F] leading-tight tracking-wide">
              Where Every Love Story Finds Its
              <span className="text-[#A67C3D]"> Perfect Celebration</span>
            </h2>

            {/* Deep Brand Story Prose */}
            <div className="space-y-4 text-[#6B7280] text-sm sm:text-base leading-relaxed font-light">
              <p>
                At RK Banquet Hall, we create unforgettable wedding celebrations
                where elegance, tradition, and luxury come together. From
                intimate engagement ceremonies to grand weddings and spectacular
                receptions, our beautifully designed venue provides the perfect
                setting for every cherished moment of your special day.
              </p>

              <p>
                Our experienced event specialists work closely with you to
                transform your vision into reality. With stunning décor,
                exceptional catering, modern amenities, spacious banquet
                facilities, and personalized hospitality, we ensure every
                celebration is flawlessly executed, allowing you and your guests
                to enjoy memories that last a lifetime.
              </p>
            </div>

            {/* Luxury Miniature Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#C8A96A]/20">
              <div className="flex items-start space-x-3">
                <Award
                  className="text-[#A67C3D] w-5 h-5 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase text-[#0F0F0F] tracking-wider">
                    Elegant Venue
                  </h4>

                  <p className="text-xs text-[#6B7280] mt-1 font-light">
                    Luxurious interiors crafted for unforgettable wedding
                    celebrations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users
                  className="text-[#A67C3D] w-5 h-5 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase text-[#0F0F0F] tracking-wider">
                    Personalized Planning
                  </h4>

                  <p className="text-xs text-[#6B7280] mt-1 font-light">
                    Dedicated event experts ensuring every detail is perfectly
                    planned.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar
                  className="text-[#A67C3D] w-5 h-5 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase text-[#0F0F0F] tracking-wider">
                    Memorable Events
                  </h4>

                  <p className="text-xs text-[#6B7280] mt-1 font-light">
                    Weddings, receptions, engagements, and celebrations made
                    extraordinary.
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Interactive Call To Action */}
            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center group font-medium text-xs sm:text-sm uppercase tracking-widest text-[#0F0F0F] hover:text-[#A67C3D] transition-colors duration-300"
              >
                <span>Explore Our Story</span>
                <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300 ease-out text-[#C8A96A] text-lg">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
