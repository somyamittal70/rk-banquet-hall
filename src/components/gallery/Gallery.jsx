import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Layers, Play, Image as ImageIcon, Film } from "lucide-react";

export default function GalleryGrid() {
  const [mediaType, setMediaType] = useState("all"); // 'all' | 'image' | 'video'
  const [selectedMedia, setSelectedMedia] = useState(null);

  const archiveItems = [
  {
    id: 1,
    type: "image",
    title: "Royal Wedding Reception",
    location: "Grand Ballroom",
    image: "https://i.pinimg.com/control1/736x/c4/b2/e4/c4b2e4d8c04932b20a05d275ac95f99d.jpg",
    span: "lg:col-span-8 lg:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Highlights - Royal Engagement",
    location: "Crystal Hall",
    image: "https://i.pinimg.com/control1/736x/d2/ae/bf/d2aebf43cc027be05cf6acac214966bf.jpg",
    videoUrl: "https://www.pexels.com/download/video/31501463/",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 3,
    type: "image",
    title: "Birthday Celebration",
    location: "Celebration Lounge",
    image: "https://i.pinimg.com/736x/56/4a/ab/564aab5e036603411f8ec70027508289.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 4,
    type: "image",
    title: "Corporate Conference",
    location: "Executive Conference Hall",
    image: "https://i.pinimg.com/736x/ba/1d/07/ba1d077afd03270ce5304aeb0f64dfd6.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 5,
    type: "video",
    title: "Luxury Wedding Decor Walkthrough",
    location: "Royal Ballroom",
    image: "https://i.pinimg.com/736x/31/01/aa/3101aaa0c9ce634db3f48baa305d7e61.jpg",
    videoUrl: "https://www.pexels.com/download/video/34926864/",
    span: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: 6,
    type: "image",
    title: "Anniversary Celebration",
    location: "Garden Pavilion",
    image: "https://i.pinimg.com/1200x/54/0e/47/540e47b72c7fe2f1f99380704c692f13.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 7,
    type: "image",
    title: "Baby Shower Event",
    location: "Rose Banquet Hall",
    image: "https://i.pinimg.com/1200x/5e/44/1a/5e441a9ae9fed4a2a9e14a3128fedf2f.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 8,
    type: "video",
    title: "Cinematic Reception Entrance",
    location: "Imperial Hall",
    image: "https://i.pinimg.com/control1/1200x/4e/e2/4d/4ee24d5cbeb4f81caef2bb6ac3da7306.jpg",
    videoUrl: "https://www.pexels.com/download/video/31702886/",
    span: "lg:col-span-4 lg:row-span-1",
  },

  // ---- Added images (10) ----
  {
    id: 9,
    type: "image",
    title: "Traditional Haldi Ceremony",
    location: "Garden Pavilion",
    image: "https://i.pinimg.com/control1/1200x/32/68/3a/32683ab2b85773006d2be99d96028ee9.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 10,
    type: "image",
    title: "Sangeet Night Decor",
    location: "Crystal Hall",
    image: "https://i.pinimg.com/736x/f4/cb/02/f4cb022e25fd08684623a06142cdc209.jpg",
    span: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: 11,
    type: "image",
    title: "Grand Stage Setup",
    location: "Imperial Hall",
    image: "https://i.pinimg.com/control1/1200x/51/f5/d5/51f5d5e8f0c321579f6e3670cd2ade35.jpg",
    span: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: 12,
    type: "image",
    title: "Poolside Cocktail Evening",
    location: "Terrace Lawn",
    image: "https://i.pinimg.com/control1/1200x/d6/a1/6c/d6a16cb33e1f3b304c2e95103362d4fa.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 13,
    type: "image",
    title: "Floral Mandap Design",
    location: "Grand Ballroom",
    image: "https://i.pinimg.com/736x/b6/dc/ed/b6dced1cde30f5b2508dab8e338d781f.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 14,
    type: "image",
    title: "Festive Diwali Gathering",
    location: "Rose Banquet Hall",
    image: "https://i.pinimg.com/1200x/89/0a/54/890a54cfb8f5e0bc22a0953c5f6ea808.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 15,
    type: "image",
    title: "Retirement Farewell Party",
    location: "Executive Conference Hall",
    image: "https://i.pinimg.com/736x/a2/92/6b/a2926ba82a402ca53c49b1e595aab6c7.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 16,
    type: "image",
    title: "Naming Ceremony Setup",
    location: "Celebration Lounge",
    image: "https://i.pinimg.com/736x/a6/e1/2c/a6e12ce27d70501304bcb45464a234e3.jpg",
    span: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: 17,
    type: "image",
    title: "Product Launch Event",
    location: "Executive Conference Hall",
    image: "https://i.pinimg.com/control1/1200x/27/3a/ef/273aefcfc3ac0b27db03ce758bf4cd29.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 18,
    type: "image",
    title: "Destination-Style Reception",
    location: "Royal Ballroom",
    image: "https://i.pinimg.com/736x/67/03/ef/6703ef4b1f4dba26f87a9c1b9f1cd332.jpg",
    span: "lg:col-span-4 lg:row-span-1",
  },

  // ---- Added videos (10) ----
  {
    id: 19,
    type: "video",
    title: "Grand Entrance Fireworks",
    location: "Imperial Hall",
    image: "https://i.pinimg.com/1200x/79/22/a1/7922a18e522ede086755da933a15b50e.jpg",
    videoUrl: "https://www.pexels.com/download/video/29992764/",
    span: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: 20,
    type: "video",
    title: "Wedding Reel - Royal Ballroom",
    location: "Royal Ballroom",
    image: "https://i.pinimg.com/control1/1200x/fe/e0/7c/fee07c1d52e15436dc9179bc194039fb.jpg",
    videoUrl: "https://www.pexels.com/download/video/34958626/",
    span: "lg:col-span-8 lg:row-span-1",
  },
  {
    id: 21,
    type: "video",
    title: "Sangeet Dance Performance",
    location: "Crystal Hall",
    image: "https://i.pinimg.com/736x/f1/ae/c9/f1aec9bfbc96a975f12dfac96b206f8a.jpg",
    videoUrl: "https://www.pexels.com/download/video/29277601/",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 22,
    type: "video",
    title: "Behind the Scenes - Setup Day",
    location: "Grand Ballroom",
    image: "https://i.pinimg.com/control1/1200x/c0/be/78/c0be78b444bd69f7d5d8fd7cc4171795.jpg",
    videoUrl: "https://www.pexels.com/download/video/34975090/",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 23,
    type: "video",
    title: "Corporate Gala Highlights",
    location: "Executive Conference Hall",
    image: "https://i.pinimg.com/1200x/2f/e9/ea/2fe9ea0410d924cb662ba91ac9429d11.jpg",
    videoUrl: "https://www.pexels.com/download/video/31575321/",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 24,
    type: "video",
    title: "Anniversary Toast Moments",
    location: "Garden Pavilion",
    image: "https://i.pinimg.com/1200x/b1/81/64/b181641618fccdc15bd619a946754b62.jpg",
    videoUrl: "https://www.pexels.com/download/video/857151/",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 25,
    type: "video",
    title: "Baby Shower Highlight Reel",
    location: "Rose Banquet Hall",
    image: "https://i.pinimg.com/736x/1b/6c/c2/1b6cc2ea32fde6b6d3f1d5a60524eddc.jpg",
    videoUrl: "https://www.pexels.com/download/video/35011906/",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 26,
    type: "video",
    title: "Poolside Party Recap",
    location: "Terrace Lawn",
    image: "https://i.pinimg.com/1200x/d2/ac/42/d2ac42d1979465497936c54dbc26a526.jpg",
    videoUrl: "/poolparty.mp4",
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: 27,
    type: "video",
    title: "Festive Season Celebration",
    location: "Celebration Lounge",
    image: "https://i.pinimg.com/control1/1200x/f5/91/36/f59136e88b4702f50e6a0c327c8e71de.jpg",
    videoUrl: "https://www.pexels.com/download/video/10142920/",
    span: "lg:col-span-4 lg:row-span-1",
  },
];



  // Filter purely based on Media Type (Photos vs Videos)
  const filteredItems = archiveItems.filter((item) => {
    return mediaType === "all" || item.type === mediaType;
  });

  return (
    <section className="relative bg-[#F5EDE0] text-[#2E2013] font-poppins py-24 lg:py-32 overflow-hidden border-t border-[#D9C8A9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sub-Header / Media Selector Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 pb-6 border-b border-[#D9C8A9]">
          
          {/* Section Label */}
          <div className="flex items-center space-x-3">
            <Layers className="w-4 h-4 text-[#21160e]" />
            <span className="marcellus-sc text-xs tracking-widest text-[#21160e] uppercase font-bold">
              Event Archive
            </span>
          </div>

          {/* Media Format Selector (All / Photos / Videos) */}
          <div className="flex bg-[#EADCC9] p-1 border border-[#D9C8A9] rounded-none">
            <button
              onClick={() => setMediaType("all")}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                mediaType === "all"
                  ? "bg-[#21160e] text-white shadow-sm"
                  : "text-[#21160e] hover:text-black"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setMediaType("image")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                mediaType === "image"
                  ? "bg-[#21160e] text-white shadow-sm"
                  : "text-[#21160e] hover:text-black"
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>Photos</span>
            </button>
            <button
              onClick={() => setMediaType("video")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase tracking-wider font-semibold transition-all ${
                mediaType === "video"
                  ? "bg-[#21160e] text-white shadow-sm"
                  : "text-[#21160e] hover:text-black"
              }`}
            >
              <Film className="w-3 h-3" />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
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
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className={`relative overflow-hidden border border-[#D9C8A9] bg-[#FFFFFF] group cursor-pointer ${item.span}`}
                onClick={() => setSelectedMedia(item)}
              >
                {/* Image Cover Layer */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2013]/90 via-[#2E2013]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 z-10" />

                {/* Play Button Indicator for Video Items */}
                {item.type === "video" && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#C8A96A]/90 border border-white/40 flex items-center justify-center text-black shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 fill-black ml-1" />
                    </div>
                  </div>
                )}

                {/* Meta Header & Actions */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start">
                    {/* Media Type Badge */}
                    <span className="marcellus-sc text-[9px] tracking-widest text-[#21160e] bg-[#F5EDE0] px-2.5 py-1 font-bold uppercase border border-[#D9C8A9]">
                      {item.type === "video" ? "Video Reel" : "Photo"}
                    </span>

                    <div className="w-8 h-8 bg-[#F5EDE0]/80 border border-[#D9C8A9] flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5 text-[#21160e]" />
                    </div>
                  </div>

                  <div>
                    <span className="marcellus-sc text-[9px] tracking-widest text-[#D9C8A9] uppercase font-bold block mb-1">
                      {item.location}
                    </span>
                    <h3 className="marcellus-sc text-lg sm:text-xl font-medium tracking-wide text-[#FFFFFF]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Cinematic Modal Viewer */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2E2013]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 select-none"
          >
            {/* Click Outside overlay */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedMedia(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full bg-[#F5EDE0] border border-[#D9C8A9] z-10 flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 text-[#21160e] hover:text-black transition-colors bg-[#F5EDE0] p-2 border border-[#D9C8A9] rounded-full z-30 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Content Display Container */}
              <div className="w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                {selectedMedia.type === "video" ? (
                  <video
                    src={selectedMedia.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-[#FFFFFF] border-t border-[#D9C8A9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="marcellus-sc text-[10px] tracking-widest text-[#21160e] uppercase font-bold block mb-1">
                    {selectedMedia.location} • {selectedMedia.type.toUpperCase()}
                  </span>
                  <h4 className="marcellus-sc text-xl font-medium tracking-wide text-[#2E2013]">
                    {selectedMedia.title}
                  </h4>
                </div>
                <a
                  href="/contact"
                  className="px-5 py-3 bg-[#21160e] text-white font-semibold uppercase text-xs tracking-widest hover:bg-[#2E2013] transition-colors duration-300 text-center"
                >
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