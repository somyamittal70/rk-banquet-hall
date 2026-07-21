import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Layers } from 'lucide-react';

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filters = [
    { id: "all", label: "All Events" },
    { id: "wedding", label: "Weddings" },
    { id: "corporate", label: "Corporate" },
    { id: "celebration", label: "Celebrations" },
  ];

  const archiveItems = [
    {
      id: 1,
      category: "wedding",
      title: "Royal Wedding Reception",
      location: "Grand Ballroom",
      image: "https://i.pinimg.com/control1/736x/c4/b2/e4/c4b2e4d8c04932b20a05d275ac95f99d.jpg",
      span: "lg:col-span-8 lg:row-span-2",
    },
    {
      id: 2,
      category: "wedding",
      title: "Elegant Engagement Ceremony",
      location: "Crystal Hall",
      image: "https://i.pinimg.com/control1/736x/d2/ae/bf/d2aebf43cc027be05cf6acac214966bf.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 3,
      category: "celebration",
      title: "Birthday Celebration",
      location: "Celebration Lounge",
      image: "https://i.pinimg.com/736x/56/4a/ab/564aab5e036603411f8ec70027508289.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 4,
      category: "corporate",
      title: "Corporate Conference",
      location: "Executive Conference Hall",
      image: "https://i.pinimg.com/736x/ba/1d/07/ba1d077afd03270ce5304aeb0f64dfd6.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 5,
      category: "wedding",
      title: "Luxury Wedding Decor",
      location: "Royal Ballroom",
      image: "https://i.pinimg.com/736x/31/01/aa/3101aaa0c9ce634db3f48baa305d7e61.jpg",
      span: "lg:col-span-8 lg:row-span-1",
    },
    {
      id: 6,
      category: "celebration",
      title: "Anniversary Celebration",
      location: "Garden Pavilion",
      image: "https://i.pinimg.com/1200x/54/0e/47/540e47b72c7fe2f1f99380704c692f13.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 7,
      category: "celebration",
      title: "Baby Shower Event",
      location: "Rose Banquet Hall",
      image: "https://i.pinimg.com/1200x/5e/44/1a/5e441a9ae9fed4a2a9e14a3128fedf2f.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 8,
      category: "wedding",
      title: "Elegant Wedding Reception",
      location: "Imperial Hall",
      image: "https://i.pinimg.com/control1/1200x/4e/e2/4d/4ee24d5cbeb4f81caef2bb6ac3da7306.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 9,
      category: "celebration",
      title: "Family Celebration",
      location: "Sky Banquet",
      image: "https://i.pinimg.com/1200x/51/77/77/5177773eff93a9007673e6993a627ecf.jpg",
      span: "lg:col-span-8 lg:row-span-1",
    },
    {
      id: 10,
      category: "corporate",
      title: "Business Seminar",
      location: "Executive Hall",
      image: "https://i.pinimg.com/1200x/44/a4/88/44a488a5d5bf88b97b7a7d316abc57a9.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 11,
      category: "wedding",
      title: "Premium Floral Decor",
      location: "Emerald Ballroom",
      image: "https://i.pinimg.com/736x/f2/fc/fc/f2fcfca85f19462849efc4277c8e89e3.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: 12,
      category: "celebration",
      title: "Kids Birthday Party",
      location: "Celebration Hall",
      image: "https://i.pinimg.com/control1/1200x/85/a3/13/85a313ad71a20c992e46cc212612f627.jpg",
      span: "lg:col-span-8 lg:row-span-1",
    },
    {
      id: 13,
      category: "wedding",
      title: "Ring Ceremony",
      location: "Royal Pavilion",
      image: "https://i.pinimg.com/1200x/3a/45/69/3a45699f45529cce71b686916eca14eb.jpg",
      span: "lg:col-span-8 lg:row-span-1",
    },
    {
      id: 14,
      category: "celebration",
      title: "Festival Celebration",
      location: "Open Lawn",
      image: "https://i.pinimg.com/1200x/1a/74/b0/1a74b0c4be71303238c2e5816ffe529b.jpg",
      span: "lg:col-span-4 lg:row-span-1",
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === activeFilter);

  return (
    <section className="relative bg-[#F5EDE0] text-[#2E2013] font-poppins py-24 lg:py-32 overflow-hidden border-t border-[#D9C8A9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dynamic Filtering Navigation Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 pb-6 border-b border-[#D9C8A9]">
          <div className="flex items-center space-x-3">
            <Layers className="w-4 h-4 text-[#6B4423]" />
            <span className="font-marcelleus-sc text-xs tracking-widest text-[#6B4423] uppercase font-bold">Event Gallery</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-[#6B4423] text-white font-semibold' 
                    : 'bg-[#FFFFFF] text-[#6B4423] border border-[#D9C8A9] hover:border-[#6B4423]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className={`relative overflow-hidden border border-[#D9C8A9] bg-[#FFFFFF] group cursor-pointer ${item.span}`}
                onClick={() => setSelectedMedia(item)}
              >
                {/* Frame Image Layer */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Ambient Linear Gradient Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2013]/90 via-[#2E2013]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 z-10" />

                {/* Floating Meta Text & Micro Actions */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-[#F5EDE0]/80 border border-[#D9C8A9] flex items-center justify-center backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-[#6B4423]" />
                    </div>
                  </div>

                  <div>
                    <span className="font-marcelleus-sc text-[9px] tracking-widest text-[#D9C8A9] uppercase font-bold block mb-1">
                      {item.location}
                    </span>
                    <h3 className="font-marcelleus-sc text-lg sm:text-xl font-medium tracking-wide text-[#FFFFFF]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Immersive Cinematic Lightbox Overlay */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2E2013]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Close Vector Target Overlay */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedMedia(null)} />

            {/* Lightbox Shell Layout */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full bg-[#F5EDE0] border border-[#D9C8A9] z-10 flex flex-col shadow-2xl"
            >
              <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 md:top-4 md:right-4 text-[#6B4423] hover:text-[#2E2013] transition-colors bg-[#F5EDE0] p-2 border border-[#D9C8A9] rounded-full z-30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full aspect-video overflow-hidden bg-black/5">
                <img src={selectedMedia.image} alt={selectedMedia.title} className="w-full h-full object-contain" />
              </div>

              <div className="p-6 bg-[#FFFFFF] border-t border-[#D9C8A9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-marcelleus-sc text-[10px] tracking-widest text-[#6B4423] uppercase font-bold block mb-1">
                    {selectedMedia.location}
                  </span>
                  <h4 className="font-marcelleus-sc text-xl font-medium tracking-wide text-[#2E2013]">
                    {selectedMedia.title}
                  </h4>
                </div>
                <a href='/contact' className="px-5 py-3 bg-[#6B4423] text-white font-semibold uppercase text-xs tracking-widest hover:bg-[#2E2013] transition-colors duration-300 text-center">
                  Book This Venue
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}