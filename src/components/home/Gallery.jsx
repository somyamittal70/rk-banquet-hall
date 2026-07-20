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
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      category: "Reception",
      title: "Elegant Reception Hall",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      category: "Decor",
      title: "Luxury Floral Decorations",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      category: "Wedding",
      title: "Beautiful Mandap Setup",
      image:
        "https://images.unsplash.com/photo-1544033527-b192daee1f5b?auto=format&fit=crop&w=600&q=80",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      category: "Reception",
      title: "Grand Dining Arrangement",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      category: "Engagement",
      title: "Romantic Engagement Ceremony",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 7,
      category: "Decor",
      title: "Premium Stage Decoration",
      image:
        "https://i.pinimg.com/1200x/fc/be/59/fcbe59a8061fd7e9e0542956321820f3.jpg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      category: "Wedding",
      title: "Magical Wedding Moments",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
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
