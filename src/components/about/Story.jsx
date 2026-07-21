import React from "react";
import { Award, Landmark, History } from "lucide-react";

export default function AboutStory() {
  const milestones = [
    {
      icon: Landmark,
      year: "2016",
      title: "Our Beginning",
      desc: "RK Banquet Hall was established with a vision to provide an elegant venue where families and businesses could celebrate life's most memorable occasions in style and comfort.",
    },
    {
      icon: History,
      year: "2020",
      title: "Growing with Trust",
      desc: "With hundreds of successful weddings, receptions, birthday celebrations, and corporate events, we expanded our services by introducing premium décor, customized catering, and modern event facilities.",
    },
    {
      icon: Award,
      year: "2026",
      title: "A Preferred Celebration Destination",
      desc: "Today, RK Banquet Hall is recognized for its exceptional hospitality, spacious banquet facilities, experienced event management team, and commitment to creating unforgettable celebrations.",
    },
  ];
  return (
    <section className="relative bg-[#F8F6F2] text-[#0F0F0F] font-poppins py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Split Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Rich Context Portfolio Media Layer */}
          <div className="lg:col-span-5 relative">
            {/* Main Primary Image */}
            <div className="relative z-10 border border-[#A67C3D]/10 shadow-2xl overflow-hidden aspect-[3/4] w-full max-w-[400px] mx-auto lg:mx-0">
              <img
                src="https://i.pinimg.com/736x/40/59/11/405911215aa4ab5f3b2201f7cb0b28c4.jpg"
                alt="Luxury Ballroom Architecture Background"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Overlapping Floating Secondary Image Frame */}
            <div className="absolute -right-4 -bottom-10 sm:right-0 md:-right-8 lg:-right-12 z-20 w-48 sm:w-56 aspect-square hidden sm:block border-4 border-[#F8F6F2] shadow-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/82/8f/b4/828fb42b418950ec230131df3aa9ebaf.jpg"
                alt="Luxury Wedding Floral details"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Classic Fine-Line Accent Box */}
            <div className="absolute -left-6 -top-6 w-32 h-32 border-l-2 border-t-2 border-[#A67C3D]/30 pointer-events-none hidden lg:block" />
          </div>

          {/* Right Column: Narrative Block & Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Mini Label Header */}
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#A67C3D]" />
              <span className="font-cormonant text-xs tracking-[0.4em] text-[#A67C3D] uppercase font-bold">
                The Story
              </span>
            </div>

            {/* Title Statement */}
            <h2 className="font-cormonant text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F0F0F] leading-tight tracking-wide mb-6">
              Creating Beautiful Celebrations with
              <span className="text-[#A67C3D]"> Passion & Perfection</span>
            </h2>

            {/* Body Description Block */}
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-6">
              At RK Banquet Hall, we believe every celebration deserves a venue that reflects elegance, comfort, and unforgettable memories. From intimate family gatherings to grand weddings and corporate events, we provide beautifully designed spaces that bring every vision to life.
            </p>
            <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed mb-12">
              Our experienced team works closely with every client to ensure seamless planning, personalized décor, delicious catering, and exceptional hospitality. Every event is managed with attention to detail so you can focus on enjoying your special day while we take care of the rest.
            </p>

            {/* Mini Editorial Chronological Timeline */}
            <div className="space-y-8 border-l border-[#A67C3D]/20 pl-6 relative">
              {milestones.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative group">
                    {/* Floating Navigation Circle Pinpoint Node */}
                    <div className="absolute -left-[35px] top-0.5 w-4 h-4 bg-[#F8F6F2] border border-[#A67C3D] flex items-center justify-center transition-all duration-300 group-hover:bg-[#A67C3D]" />

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-[#A67C3D]/5 border border-[#A67C3D]/20 text-[#A67C3D] mt-1">
                        <IconComponent strokeWidth={1.5} className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-cormonant text-sm font-bold text-[#A67C3D] tracking-widest block mb-0.5">
                          {item.year} — {item.title}
                        </span>
                        <p className="text-gray-500 font-light text-xs sm:text-sm leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
