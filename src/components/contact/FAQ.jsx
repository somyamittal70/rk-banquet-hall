import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of events do you host?",
    answer:
      "We host weddings, receptions, engagement ceremonies, birthdays, anniversaries, corporate events, conferences, and private celebrations.",
  },
  {
    question: "What is the guest capacity of the banquet hall?",
    answer:
      "Our banquet hall comfortably accommodates 100 to 1200 guests with flexible seating arrangements.",
  },
  {
    question: "Do you provide decoration services?",
    answer:
      "Yes, we offer premium decoration packages including floral décor, stage design, lighting, and customized themes.",
  },
  {
    question: "Is catering included with the booking?",
    answer:
      "Yes, we provide in-house catering with customizable vegetarian and non-vegetarian menus prepared by expert chefs.",
  },
  {
    question: "Do you have parking facilities?",
    answer:
      "Yes, we provide secure and spacious parking with valet service for your guests.",
  },
  {
    question: "How can I book the venue?",
    answer:
      "You can book the venue by contacting us through our website, phone, or visiting our banquet hall for a personalized tour.",
  },
];

function FAQItem({ item, active, onClick }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -4 }}
      className="overflow-hidden  border border-[#D9C8A9]/20 bg-[#24170F]/80 backdrop-blur-xl transition-all duration-300 hover:border-[#D9C8A9]/50"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <h3
          className="pr-5 text-base font-semibold text-[#F5EDE0]"
          style={{ fontFamily: "'Marcellus SC', serif" }}
        >
          {item.question}
        </h3>

        <div className="flex h-8 w-8 items-center justify-center l bg-[#6B4423] text-[#D9C8A9]">
          {active ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="px-6 pb-6 text-[15px] leading-7 text-gray-300">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState();

  const left = faqs.slice(0, 3);
  const right = faqs.slice(3);

  return (
    <section className="relative overflow-hidden bg-[#1B120D] py-24">
      {/* Background Blur */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#6B4423]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D9C8A9]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[6px] text-[#D9C8A9]">
            Frequently Asked Questions
          </span>

          <h2
            className="mt-4 text-4xl font-semibold text-[#F5EDE0] md:text-6xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Find answers to the most common questions about our banquet hall,
            services, catering, decorations, and booking process.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            {left.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                active={open === index}
                onClick={() => setOpen(open === index ? null : index)}
              />
            ))}
          </div>

          <div className="space-y-6">
            {right.map((item, index) => (
              <FAQItem
                key={index + 3}
                item={item}
                active={open === index + 3}
                onClick={() => setOpen(open === index + 3 ? null : index + 3)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
