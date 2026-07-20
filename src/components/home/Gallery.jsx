import React, { useState } from "react";
import { X, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", "Wedding", "Reception", "Engagement", "Decor"];

  const galleryItems = [
    {
      id: 1,
      category: "Wedding",
      title: "Royal Wedding Ceremony",
      image:
        "https://i.pinimg.com/736x/40/59/11/405911215aa4ab5f3b2201f7cb0b28c4.jpg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      category: "Reception",
      title: "Elegant Reception Hall",
      image:
        "https://i.pinimg.com/736x/8c/7d/1a/8c7d1aca113e6b367c7bd91b89f1eb34.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      category: "Decor",
      title: "Luxury Floral Decorations",
      image:
        "https://i.pinimg.com/control1/1200x/e2/93/cd/e293cd60ed704788f5bad4b29e767602.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      category: "Wedding",
      title: "Beautiful Mandap Setup",
      image:
        "https://i.pinimg.com/736x/b6/dc/ed/b6dced1cde30f5b2508dab8e338d781f.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      category: "Reception",
      title: "Grand Dining Arrangement",
      image:
        "https://i.pinimg.com/1200x/90/f7/f5/90f7f520a85694cea54013ab9362884f.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      category: "Engagement",
      title: "Romantic Engagement Ceremony",
      image:
        "https://i.pinimg.com/736x/34/ac/ac/34acacec365c9bc851da3d93c5713597.jpg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 7,
      category: "Decor",
      title: "Premium Stage Decoration",
      image:
        "https://i.pinimg.com/control1/1200x/51/f5/d5/51f5d5e8f0c321579f6e3670cd2ade35.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      category: "Wedding",
      title: "Magical Wedding Moments",
      image:
        "https://i.pinimg.com/control1/1200x/74/7c/5d/747c5d8b5ffe5c97d035ca38a879a49b.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
  ];
  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="relative bg-[#F8F6F2] text-[#0F0F0F] font-poppins py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#A67C3D]" />
            <span className="font-cinzel text-xs tracking-[0.4em] text-[#A67C3D] uppercase font-bold">
              Wedding Gallery
            </span>
            <span className="w-8 h-[1px] bg-[#A67C3D]" />
          </div>
          <h2 className="font-cinzelDecorative text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F0F0F] leading-tight tracking-wide">
            Creating Beautiful Memories
            <span className="text-[#A67C3D]"> One Celebration at a Time</span>
          </h2>
        </div>

        {/* Premium Filter Controls Layout */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`relative py-2 px-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === category
                  ? "text-[#A67C3D]"
                  : "text-[#6B7280] hover:text-[#0F0F0F]"
              }`}
            >
              {category}
              {activeFilter === category && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#A67C3D]" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Asymmetric Mosaic Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className={`group relative overflow-hidden bg-[#0F0F0F] cursor-pointer shadow-lg border border-[#C8A96A]/10 transition-all duration-300 ${item.span}`}
            >
              {/* Image Container */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-40"
              />

              {/* Rich Glass Overlay Card on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/90 via-[#0F0F0F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                <div className="flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div>
                    <span className="font-cinzel text-[10px] tracking-[0.35em] text-[#C8A96A] uppercase font-bold block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-cinzel text-base md:text-lg text-white font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-[#C8A96A]/40 flex items-center justify-center text-[#C8A96A]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Full-Screen Lightbox Modal Overlays */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-[#0F0F0F]/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#C8A96A] transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative border border-[#C8A96A]/30 p-2 bg-[#0F0F0F]">
            <img
              src={selectedImage}
              alt="Wedding Banquet Hall Gallery"
              className="max-w-full max-h-[80vh] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
