import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import BookingModal from "./BookingModal";

function MobileDrawer({ isOpen, setIsOpen, navLinks, currentPath }) {
  return createPortal(
    <>
      {/* Dark backdrop behind the sliding panel */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[9998] bg-black/60 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding side panel — enters from right, exits to right */}
      <div
        className={`fixed top-0 right-0 h-full w-[78%] xs:w-[70%] sm:w-[380px] z-[9999] bg-[#FFFFFF] overflow-y-auto lg:hidden transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Subtle luxury accent border */}
        <div className="absolute inset-3 opacity-20 pointer-events-none border border-[#D9C8A9]" />

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          aria-label="Close navigation menu"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 inline-flex items-center justify-center w-10 h-10 text-[#6B4423] hover:text-[#D9C8A9] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav className="min-h-full flex flex-col items-start justify-center gap-6 sm:gap-7 w-full px-8 sm:px-10">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg sm:text-xl uppercase tracking-widest transition-colors duration-300 font-marcelleus-sc ${
                  isActive ? "text-[#D9C8A9] font-bold" : "text-[#D9C8A9]/70 hover:text-[#D9C8A9]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-4 sm:pt-6 w-full max-w-xs">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] bg-[#6B4423] hover:bg-[#D9C8A9] hover:text-[#6B4423] transition-colors duration-300 border border-[#6B4423]"
            >
              Book an Event
            </Link>
          </div>
        </nav>
      </div>
    </>,
    document.body
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFFFF] border-[#D9C8A9] shadow-md"
          : "bg-[#FFFFFF] border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" className="flex items-center select-none py-1 sm:py-2">
              <img
                src="logo.png"
                alt="RK Banquet Hall Logo"
                className="h-13 w-auto sm:h-15 md:h-17 lg:h-19 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links (lg and up) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-2 font-medium text-[13px] xl:text-sm uppercase tracking-widest transition-colors duration-300 group whitespace-nowrap ${
                    isActive ? "text-[#6B4423]" : "text-[#6B4423]/80 hover:text-[#D9C8A9]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#6B4423] transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-5 py-2.5 xl:px-6 text-[11px] xl:text-xs font-semibold uppercase tracking-widest transition-all duration-300 border bg-transparent text-[#6B4423] border-[#6B4423] hover:bg-[#6B4423] hover:text-[#FFFFFF] whitespace-nowrap"
            >
              Book an Event
            </button>
          </div>

          {/* Mobile / Tablet Menu Toggle (below lg) */}
          <div className="flex lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 focus:outline-none text-[#6B4423] hover:text-[#D9C8A9] transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileDrawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navLinks={navLinks}
        currentPath={currentPath}
      />

      {/* Render Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}