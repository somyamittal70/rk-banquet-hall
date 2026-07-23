import React from "react";
import { PhoneCall, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-[#21160e] text-[#F5EDE0] font-poppins py-20 sm:py-28 overflow-hidden">
      {/* Ambient Glow Orbs */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#A06C3A]/20 rounded-full blur-3xl pointer-events-none" /> */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B4423]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-[#D9C8A9]/20 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
              <img
                src="https://i.pinimg.com/736x/de/47/8e/de478e5cd7674e7092d7ccd2c40ad504.jpg"
                alt="Wedding couple celebration"
                className="w-full h-[380px] sm:h-[450px] lg:h-[520px] object-cover"
              />
              {/* Gradient overlay for blend */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#21160e]/70 via-transparent to-transparent" /> */}
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#F5EDE0] text-[#21160e] rounded-2xl px-6 py-4 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.4)] border border-[#D9C8A9]">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#A06C3A]" />
                <span className="marcellus-sc font-bold text-2xl">500+</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#21160e]/60 font-semibold">
                Celebrations Curated
              </span>
            </div>

            {/* Decorative dotted frame */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D9A867]/50 rounded-tl-3xl pointer-events-none hidden sm:block" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-5">
              <span className="w-8 h-[2px] bg-[#B08D57]" />
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#B08D57]">
                Begin Your Journey
              </span>
            </div>

            <h2 className="marcellus-sc text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-6 leading-tight">
              Let's Create Your{" "}
              <span className="text-[#D9A867] font-normal">
                Perfect Day
              </span>
            </h2>

            <p className="text-[#F5EDE0]/70 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
              Every celebration deserves a story worth telling. Reach out
              today and let our team craft an experience as unique as you
              are.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
              href="/contact"
               className="group flex items-center gap-2 bg-[#D9A867] text-[#21160e] px-8 py-4 text-sm uppercase font-bold tracking-widest hover:bg-[#F5EDE0] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(217,168,103,0.5)]">
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
              href="tel: +91-9891018675"
              className="flex items-center gap-2 border border-[#D9C8A9]/40 text-[#F5EDE0] px-8 py-4 text-sm uppercase font-bold tracking-widest hover:bg-[#F5EDE0]/10 hover:border-[#D9C8A9] transition-all duration-300">
                <PhoneCall className="w-4 h-4" />
                Call Us Now
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#F5EDE0]/40 text-xs uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#B08D57]" />
              <span>Trusted by Couples Across India</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}