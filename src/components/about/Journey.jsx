import { motion } from "framer-motion";
import {
  Snowflake,
  Car,
  BedDouble,
  ShieldCheck,
  ChefHat,
  Music4,
  Flower2,
  Wifi,
} from "lucide-react";

const facilities = [
  {
    icon: Snowflake,
    title: "Spacious AC Halls",
  },
  {
    icon: ChefHat,
    title: "Premium Catering",
  },
  {
    icon: Car,
    title: "Ample Parking Space",
  },
  {
    icon: Music4,
    title: "DJ & Sound System",
  },
  {
    icon: BedDouble,
    title: "Luxury Rooms",
  },
  {
    icon: Flower2,
    title: "Decoration Services",
  },
  {
    icon: ShieldCheck,
    title: "Power Backup",
  },
  {
    icon: Wifi,
    title: "High Speed WiFi",
  },
];

const stats = [
  {
    number: "5000+",
    title: "Events",
    sub: "Organized",
  },
  {
    number: "4000+",
    title: "Happy",
    sub: "Families",
  },
  {
    number: "12+",
    title: "Years of",
    sub: "Excellence",
  },
  {
    number: "150+",
    title: "Corporate",
    sub: "Clients",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="bg-[#21160e] py-20 relative overflow-hidden">
      {/* Ambient gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#D9C8A9] opacity-[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#21160e] opacity-[0.15] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 relative">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Facilities */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#D9C8A9]/40" />

              <h2
                className="uppercase tracking-[4px] text-sm text-[#D9C8A9]"
                style={{
                  fontFamily: "marcelleus-sc",
                }}
              >
                Our Facilities
              </h2>

              <div className="w-10 h-px bg-[#D9C8A9]/40" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {facilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="bg-[#1E150D] rounded-2xl px-6 py-3 border border-[#3A2A18] flex items-center gap-4 group hover:border-[#D9C8A9]/50 hover:bg-[#241A10] duration-300 cursor-pointer"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-full bg-[#2A1D11] flex items-center justify-center border border-[#3A2A18] group-hover:bg-[#D9C8A9] group-hover:border-[#D9C8A9] duration-300">
                      <Icon
                        size={20}
                        className="text-[#D9C8A9] group-hover:text-[#1A120B] duration-300"
                      />
                    </div>

                    <h3 className="font-medium text-[#F0E6D2] group-hover:text-white duration-300">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stats Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-[28px] mt-16 overflow-hidden bg-[#1E150D] border border-[#3A2A18] text-white shadow-[0_0_60px_-15px_rgba(217,200,169,0.15)]"
          >
            <div className="grid grid-cols-2">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 flex flex-col justify-center items-center text-center
                  ${index !== 1 ? "border-r border-[#3A2A18]" : ""}
                  ${index < 2 ? "border-b border-[#3A2A18]" : ""}`}
                >
                  <h2
                    className="text-4xl text-[#D9C8A9]"
                    style={{
                      fontFamily: "marcelleus-sc",
                    }}
                  >
                    {item.number}
                  </h2>

                  <p className="mt-3 text-sm uppercase tracking-widest text-[#F0E6D2]">
                    {item.title}
                  </p>

                  <p className="text-sm text-[#A08A6C]">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
