import React, { useState, useEffect } from "react";

// Replace these image paths with your actual asset locations
const bgImages = [
  "https://i.pinimg.com/control1/1200x/f7/a1/2b/f7a12b4eefa8cdee8905e041502a23ae.jpg",
  "https://i.pinimg.com/736x/33/a3/59/33a3596d84bd9a1bb4646887e9f46602.jpg",
  "https://i.pinimg.com/736x/17/b0/ca/17b0caaa411528baf6afc9d7bf7c0d46.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bgImages.length);
    }, 5000); // Rotates every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] min-h-[560px] overflow-hidden bg-[#6B4423] font-poppins">
      {/* Background Slideshow */}
      {bgImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all ease-in-out bg-cover bg-center z-0 ${
            index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            transitionDuration: "1000ms",
          }}
        />
      ))}


      {/* Hero Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 mt-18 flex flex-col justify-center items-center text-center">
        {/* Main Luxury Heading */}
        <h1 className="font-pt-serif text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold tracking-wide text-[#FFFFFF] max-w-[80%] sm:max-w-xl md:max-w-3xl lg:max-w-4xl leading-tight sm:leading-tight mb-4 sm:mb-6">
          Celebrate Your{" "}
          <span className="bg-gradient-to-b from-[#F5EDE0] via-[#D9C8A9] to-[#FFFFFF] bg-clip-text text-transparent">
            Dream Wedding
          </span>
          <br />
          In Unmatched Elegance
        </h1>

        {/* Supporting Text */}
        <p className="text-[#F5EDE0] text-sm xs:text-base sm:text-md max-w-[90%] sm:max-w-lg md:max-w-2xl font-light tracking-wide opacity-90 mb-8 sm:mb-10 leading-relaxed">
          Celebrate love in a venue crafted for unforgettable weddings and timeless memories.
        </p>

        {/* Action Button */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-none border border-[#D9C8A9]/50 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#FFFFFF] bg-gradient-to-r from-[#6B4423] via-[#8A582D] to-[#6B4423] hover:brightness-110 transition-all duration-300 shadow-xl hover:shadow-[0_12px_30px_rgba(217,200,169,0.3)] whitespace-nowrap"
        >
          Book Your Dream Wedding
        </a>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {bgImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#D9C8A9]"
                : "w-2 bg-[#F5EDE0]/40 hover:bg-[#F5EDE0]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}