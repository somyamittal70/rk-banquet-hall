// src/components/layout/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-9 right-6 sm:bottom-12 sm:right-8 z-50 flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 bg-[#6B4423] hover:bg-[#F5EDE0] text-[#FFFFFF] hover:text-[#6B4423] border border-[#D9C8A9] shadow-lg shadow-[#6B4423]/20 backdrop-blur-md transition-colors duration-300 group"
        >
          <span className="absolute inset-0 bg-[#D9C8A9]/20 blur-lg -z-10 group-hover:bg-[#D9C8A9]/40 transition-colors" />
          <ArrowUp size={20} className="stroke-[2.5] transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}