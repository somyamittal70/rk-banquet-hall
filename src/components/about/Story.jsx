import { motion } from "framer-motion";
import { Landmark, History, Award, Quote } from "lucide-react";

const milestones = [
  {
    icon: Landmark,
    year: "2016",
    title: "Our Beginning",
    desc: "Established with a vision to provide an elegant venue for life's most memorable occasions.",
  },
  {
    icon: History,
    year: "2020",
    title: "Growing With Trust",
    desc: "Hundreds of weddings and celebrations later, we expanded into premium décor and catering.",
  },
  {
    icon: Award,
    year: "2026",
    title: "A Preferred Destination",
    desc: "Recognized today for exceptional hospitality and unforgettable celebrations.",
  },
];





export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-[#F5EDE0] py-20 lg:py-28">
      {/* Background Decoration */}
      <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#D9C8A9]/25 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-[#6B4423]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* ================= Left: Image ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -left-5 -top-5 w-24 h-24 border-l-2 border-t-2 border-[#6B4423]/40 pointer-events-none hidden lg:block" />

            <div className="overflow-hidden rounded-[28px] shadow-[0_30px_60px_-15px_rgba(107,68,35,0.3)] aspect-[4/5]">
              <img
                src="https://i.pinimg.com/736x/39/08/bf/3908bf9c0c3e94bc6f9e6f8de830bd46.jpg"
                alt="Banquet Hall"
                className="h-full w-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Caption plaque */}
            <div className="mt-5 flex items-center justify-between border-t border-[#D9C8A9] pt-4">
              <div>
                <h4
                  className="text-2xl text-[#6B4423]"
                  style={{ fontFamily: "'Marcellus SC', serif" }}
                >
                  5000+
                </h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Celebrations Hosted
                </p>
              </div>
              <div className="h-8 w-px bg-[#D9C8A9]" />
              <div>
                <h4
                  className="text-2xl text-[#6B4423]"
                  style={{ fontFamily: "'Marcellus SC', serif" }}
                >
                  12+
                </h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Years of Trust
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= Right: Story + Timeline ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >



           
           <h1 className="text-[#A06C3A]">Our Story</h1>

            <h2
              className="mt-6 text-4xl leading-tight text-[#6B4423] md:text-5xl"
              style={{ fontFamily: "'Marcellus SC', serif" }}
            >
              More than just a venue —
              <br />
              <span className="text-[#A06C3A]">a legacy of celebrations</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700 max-w-2xl">
              For over a decade, we have transformed celebrations into
              unforgettable memories, crafted with elegance, luxury, and
              attention to every detail.
            </p>

            {/* Timeline */}
            <div className="mt-12 space-y-8 border-l-2 border-[#D9C8A9] pl-8 relative">
              {milestones.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#F5EDE0] border-2 border-[#D9C8A9] group-hover:bg-[#6B4423] group-hover:border-[#6B4423] duration-300" />

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-[#D9C8A9] flex items-center justify-center">
                        <Icon size={16} className="text-[#6B4423]" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-[#A06C3A] tracking-widest uppercase block mb-1">
                          {item.year} — {item.title}
                        </span>
                        <p className="text-sm text-gray-600 leading-relaxed max-w-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Founder quote */}
            <div className="mt-12 bg-white rounded-2xl border border-[#E8DAC5] p-6 flex gap-4 shadow-sm max-w-xl">
              <Quote className="text-[#D9C8A9] shrink-0" size={28} />
              <div>
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  Every celebration we host carries a piece of our own family's
                  story — that's the standard we hold ourselves to.
                </p>
                <p
                  className="mt-3 text-base text-[#6B4423]"
                  style={{ fontFamily: "'Marcellus SC', serif" }}
                >
                  Rohit Malhotra
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Founder & Director
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
