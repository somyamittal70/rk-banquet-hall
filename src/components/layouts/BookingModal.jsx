import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, Phone, User, Mail, Sparkles } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    guestCount: "",
    eventType: "Wedding",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Inquiry Submitted:", formData);
    alert("Thank you! Our event manager will contact you shortly.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-poppins mt-80">
          {/* Backdrop Overlay Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2E2013]/60 backdrop-blur-sm"
          />

          {/* Centered Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg bg-[#F5EDE0] text-[#6B4423] border border-[#D9C8A9] p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Corner Decorative Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#6B4423] pointer-events-none" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#6B4423] pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#6B4423] pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#6B4423] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#6B4423]/70 hover:text-[#6B4423] transition-colors p-1.5 rounded-full border border-transparent hover:border-[#D9C8A9] z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6 pt-2">
              <div className="flex items-center justify-center gap-2 text-[#6B4423] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase font-bold">
                  RK Banquet Hall
                </span>
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="font-cinzelDecorative text-2xl sm:text-3xl font-bold text-[#6B4423]">
                Book Your Event
              </h2>
              <p className="text-xs text-[#2E2013]/70 mt-1 font-light">
                Fill out the details below to check availability for your date.
              </p>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B4423]" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF] border border-[#D9C8A9] text-[#2E2013] placeholder-[#2E2013]/50 pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#6B4423] transition-colors shadow-sm"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B4423]" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF] border border-[#D9C8A9] text-[#2E2013] placeholder-[#2E2013]/50 pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#6B4423] transition-colors shadow-sm"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B4423]" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF] border border-[#D9C8A9] text-[#2E2013] placeholder-[#2E2013]/50 pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#6B4423] transition-colors shadow-sm"
                  />
                </div>
              </div>

              {/* Event Type & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF] border border-[#D9C8A9] text-[#2E2013] pl-3 pr-4 py-3 text-xs focus:outline-none focus:border-[#6B4423] transition-colors shadow-sm"
                  >
                    <option value="Wedding">Wedding</option>
                    <option value="Reception">Reception</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Birthday / Party">Birthday / Party</option>
                  </select>
                </div>

                <div className="relative">
                  <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B4423]" />
                  <input
                    type="number"
                    name="guestCount"
                    required
                    placeholder="Expected Guests *"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF] border border-[#D9C8A9] text-[#2E2013] placeholder-[#2E2013]/50 pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#6B4423] transition-colors shadow-sm"
                  />
                </div>
              </div>

              {/* Event Date */}
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B4423]" />
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF] border border-[#D9C8A9] text-[#2E2013] placeholder-[#2E2013]/50 pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#6B4423] transition-colors shadow-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-[#6B4423] text-[#FFFFFF] border border-[#6B4423] font-semibold text-xs tracking-[0.25em] uppercase py-3.5 hover:bg-transparent hover:text-[#6B4423] transition-all duration-300 shadow-md"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}