import { motion } from "framer-motion";
import { Sparkles, Sofa, ChefHat, Users } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    number: "01",
    title: "Luxury Interior ",
    desc: "Elegant themes and premium floral setups crafted to match every occasion.",
  },
  {
    icon: Sofa,
    number: "02",
    title: "Modern Decoration ",
    desc: "Contemporary halls with refined finishes and ambient lighting throughout.",
  },
  {
    icon: ChefHat,
    number: "03",
    title: "Professional Catering",
    desc: "Curated multi-cuisine menus prepared and served by expert culinary staff.",
  },
  {
    icon: Users,
    number: "04",
    title: "Experienced Team",
    desc: "A dedicated crew that manages every detail so your event runs seamlessly.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#140D08] py-20 relative overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-[#D9C8A9] opacity-[0.05] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            <div className="rounded-[28px] overflow-hidden border border-[#3A2A18]">
              <img
                src="https://i.pinimg.com/736x/60/6a/a8/606aa894296fce63d62022949c92ff01.jpg"
                alt="Grand Palace Banquet Hall interior"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-8 -right-6 bg-[#1E150D] border border-[#D9C8A9]/30 rounded-2xl px-7 py-5 shadow-[0_0_50px_-10px_rgba(217,200,169,0.2)]">
              <h3
                className="text-4xl text-[#D9C8A9]"
                style={{
                  fontFamily: "Cormorant",
                }}
              >
                12+
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#A08A6C] mt-1">
                Years of Excellence
              </p>
            </div>
          </motion.div>

          {/* Content side */}

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#D9C8A9]/40" />

              <h2
                className="uppercase tracking-[4px] text-sm text-[#D9C8A9]"
                style={{
                  fontFamily: "Cormorant",
                }}
              >
                Why Choose Us
              </h2>
            </div>

            <h3
              className="text-4xl md:text-[40px] text-[#F0E6D2] leading-tight mb-10"
              style={{
                fontFamily: "Cormorant",
              }}
            >
              Where every celebration meets timeless elegance
            </h3>

            <div className="flex flex-col gap-2">
              {reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="relative flex items-start gap-5 py-5 border-b border-[#3A2A18] last:border-b-0 group"
                  >
                    <span
                      className="absolute -top-1 right-0 text-6xl text-[#D9C8A9] opacity-[0.06] group-hover:opacity-[0.12] duration-300 select-none"
                      style={{
                        fontFamily: "Cormorant",
                      }}
                    >
                      {item.number}
                    </span>

                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1E150D] border border-[#3A2A18] flex items-center justify-center group-hover:bg-[#D9C8A9] group-hover:border-[#D9C8A9] duration-300">
                      <Icon
                        size={20}
                        className="text-[#D9C8A9] group-hover:text-[#1A120B] duration-300"
                      />
                    </div>

                    <div className="relative">
                      <h4 className="text-lg font-medium text-[#F0E6D2] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#A08A6C] leading-relaxed pr-14">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
