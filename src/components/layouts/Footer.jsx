import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F5EDE0] text-[#6B4423] font-poppins border-t border-[#D9C8A9] pt-20 pb-8 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#D9C8A9] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & About (5/12 width) */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <a href="/" className="inline-block self-start select-none group">
              <img
                src="logo.png"
                alt="RK Banquet Hall Logo"
                className="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <p className="text-[#6B4423]/80 text-sm leading-relaxed max-w-sm font-light">
              Creating unforgettable wedding celebrations with elegance, luxury,
              and exceptional hospitality. From engagements and receptions to
              grand weddings, RK Banquet Hall transforms every occasion into a
              timeless memory.
            </p>

            {/* Social Buttons: Permanent Authentic Brand Colors with Premium Light UI */}
            <div className="flex items-center space-x-4 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[#1877F2]/30 text-[#1877F2] bg-white transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[#E1306C]/30 text-[#E1306C] bg-white transition-all duration-300 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.01 3.81.058 1.026.048 1.733.211 2.343.447a4.735 4.735 0 011.664 1.082 4.735 4.735 0 011.082 1.664c.236.61.399 1.317.447 2.342.048 1.027.058 1.381.058 3.81s-.01 2.784-.058 3.81c-.048 1.025-.211 1.733-.447 2.343a4.737 4.737 0 01-1.082 1.664 4.735 4.735 0 01-1.664 1.082c-.61.236-1.317.399-2.343.447-1.026.048-1.38.058-3.81.058s-2.784-.01-3.81-.058c-1.025-.048-1.733-.211-2.343-.447a4.747 4.747 0 01-1.664-1.082 4.737 4.737 0 01-1.082-1.664c-.236-.61-.399-1.317-.447-2.343-.048-1.026-.058-1.38-.058-3.81c0-2.43.01-2.784.058-3.81.048-1.025.211-1.733.447-2.343a4.739 4.739 0 011.082-1.664 4.735 4.735 0 011.664-1.082c.61-.236 1.317-.399 2.343-.447 1.026-.048 1.38-.058 3.81-.058zM12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.468A3.333 3.333 0 1112 8.667a3.333 3.333 0 010 6.666zm5.338-8.925a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[#25D366]/30 text-[#25D366] bg-white transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:-translate-y-1 shadow-sm hover:shadow-md"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.15 1.6 5.97L0 24l6.34-1.66a11.8 11.8 0 005.72 1.46h.01c6.56 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.15-3.43-8.44zM12.07 21.7a9.8 9.8 0 01-5-1.37l-.36-.21-3.76.99 1-3.66-.24-.38a9.77 9.77 0 01-1.5-5.19c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.02 6.96 2.88a9.8 9.8 0 012.88 6.95c0 5.42-4.41 9.82-9.83 9.82zm5.39-7.37c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.91 1.12-.17.2-.33.22-.62.07-.29-.15-1.21-.45-2.31-1.43-.85-.76-1.42-1.69-1.59-1.98-.17-.29-.02-.45.13-.6.14-.14.29-.36.43-.53.14-.17.19-.29.29-.48.1-.2.05-.37-.02-.53-.07-.15-.64-1.54-.88-2.12-.23-.55-.46-.47-.64-.48h-.55c-.19 0-.48.07-.73.34-.26.29-.99.96-.99 2.34s1.01 2.72 1.15 2.91c.15.2 1.98 3.03 4.8 4.25.67.29 1.19.46 1.6.59.67.21 1.27.18 1.75.11.53-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3/12 width) */}
          <div className="md:col-span-3 md:pl-4">
            <h3 className="font-cinzel text-[#6B4423] text-sm font-semibold tracking-widest uppercase mb-6 relative">
              Quick Links
              <span className="block w-8 h-px bg-[#D9C8A9] mt-2" />
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#6B4423]/80 hover:text-[#6B4423] font-medium transition-colors duration-300 flex items-center group text-left"
                  >
                    <ArrowRight className="w-3 h-3 text-[#6B4423] mr-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:mr-2 group-hover:translate-x-0" />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (4/12 width) */}
          <div className="md:col-span-4">
            <h3 className="font-cinzel text-[#6B4423] text-sm font-semibold tracking-widest uppercase mb-6 relative">
              Get In Touch
              <span className="block w-8 h-px bg-[#D9C8A9] mt-2" />
            </h3>
            <ul className="space-y-4 text-sm text-[#6B4423]/80">
              <li className="flex items-start gap-3.5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#D9C8A9] text-[#6B4423] flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#D9C8A9]/30">
                  <MapPin className="w-4 h-4" strokeWidth={2} />
                </div>
                <span className="leading-relaxed transition-colors duration-300 group-hover:text-[#6B4423]">
                  74, Rakesh Marg, Pocket K, Nehru Nagar III, Nehru Nagar,
                  Ghaziabad, Uttar Pradesh, 201001
                </span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#D9C8A9] text-[#6B4423] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#D9C8A9]/30">
                  <Phone className="w-4 h-4" strokeWidth={2} />
                </div>
                <a
                  href="tel:+919891018675"
                  className="transition-colors duration-300 group-hover:text-[#6B4423]"
                >
                  +91-9891018675
                </a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#D9C8A9] text-[#6B4423] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#D9C8A9]/30">
                  <Mail className="w-4 h-4" strokeWidth={2} />
                </div>
                <a
                  href="mailto:events@rkbanquet.com"
                  className="transition-colors duration-300 group-hover:text-[#6B4423]"
                >
                  events@rkbanquet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D9C8A9] to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#6B4423]/70 space-y-4 sm:space-y-0 font-light tracking-wide">
          <div>
            &copy; {currentYear} <span className="text-[#6B4423] font-semibold">RK Banquet Hall</span>. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://deboxtechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6B4423] transition-colors duration-300 relative after:content-[''] after:block after:w-0 after:h-px after:bg-[#6B4423] after:transition-all after:duration-300 hover:after:w-full"
            >
              Developed By Debox Technology
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}