import React from "react";
import { Award, Users, Calendar, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-[#F5EDE0]/30 text-[#21160e] font-poppins py-24 lg:py-32 overflow-hidden border-b border-[#D9C8A9]">
      {/* Background Subtle Glows */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#D9C8A9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[#21160e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Image Grid */}
          <div className="lg:col-span-6 relative">
            {/* Gold Frame Backdrop */}
            <div className="absolute -top-4 -left-4 w-2/3 h-3/4 border-2 border-[#D9C8A9] translate-x-4 translate-y-4 pointer-events-none hidden sm:block" />

            {/* Main Primary Image */}
            <div className="relative z-10 overflow-hidden shadow-2xl border border-[#D9C8A9] group bg-[#FFFFFF]">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
                alt="RK Banquet Hall Luxury Setting"
                className="w-full h-[450px] object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-[#21160e]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Secondary Overlapping Image */}
            <div className="absolute -bottom-12 -right-6 w-1/2 hidden sm:block z-20 overflow-hidden border-8 border-[#F5EDE0] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80"
                alt="Gourmet Catering Detail"
                className="w-full h-[250px] object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -top-6 right-6 z-30 bg-[#21160e] text-[#FFFFFF] p-6 border-b-4 border-[#D9C8A9] shadow-xl text-center min-w-[120px]">
              <span className="block marcellus-sc text-3xl font-bold text-[#D9C8A9]">
                15+
              </span>
              <span className="block text-[10px] uppercase tracking-widest font-medium text-[#F5EDE0]/90 mt-1">
                Years of
                <br />
                Excellence
              </span>
            </div>
          </div>

          {/* Right Column: Content Architecture */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            {/* Header Tag */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className="w-8 h-[1px] bg-[#21160e]" />
                <span className="marcellus-sc text-xs tracking-[0.35em] text-[#21160e] uppercase font-bold">
                  About Us
                </span>
              </div>
              <h2 className="marcellus-sc text-3xl sm:text-4xl md:text-5xl font-bold text-[#21160e] leading-tight tracking-wide">
                Where Every Love Story Find
                <span className="text-[#A06C3A] font-normal"> Perfect Celebration</span>
              </h2>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-[#2E2013]/80 text-sm sm:text-base leading-relaxed font-light">
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
                celebration is flawlessly executed.
              </p>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#D9C8A9]">
              <div className="flex items-start space-x-3">
                <Award
                  className="text-[#21160e] w-5 h-5 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="marcellus-sc text-xs font-bold uppercase text-[#21160e] tracking-wider">
                    Elegant Venue
                  </h3>
                  <p className="text-xs text-[#2E2013]/70 mt-1 font-light leading-snug">
                    Luxurious interiors crafted for unforgettable wedding celebrations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users
                  className="text-[#21160e] w-5 h-5 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="marcellus-sc text-xs font-bold uppercase text-[#21160e] tracking-wider">
                    Personalized Planning
                  </h3>
                  <p className="text-xs text-[#2E2013]/70 mt-1 font-light leading-snug">
                    Dedicated event experts ensuring every detail is perfectly planned.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Calendar
                  className="text-[#21160e] w-5 h-5 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="marcellus-sc text-xs font-bold uppercase text-[#21160e] tracking-wider">
                    Memorable Events
                  </h3>
                  <p className="text-xs text-[#2E2013]/70 mt-1 font-light leading-snug">
                    Weddings, receptions, and engagements made extraordinary.
                  </p>
                </div>
              </div>
            </div>

            {/* Call To Action Button */}
            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-3 group font-semibold text-xs sm:text-sm uppercase tracking-widest text-[#FFFFFF] bg-[#21160e] px-6 py-3 border border-[#21160e] hover:bg-transparent hover:text-[#21160e] transition-all duration-300 shadow-sm"
              >
                <span>Explore Our Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}