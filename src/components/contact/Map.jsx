import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

export default function ContactMap() {
  // Encoded address string for the Google Maps embed URL
  const mapEmbedUrl = "https://maps.google.com/maps?q=74,%20Rakesh%20Marg,%20Pocket%20K,%20Nehru%20Nagar%20III,%20Ghaziabad,%20UP%20201001&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const handleDirectionsClick = () => {
    window.open("https://maps.google.com/?q=74,+Rakesh+Marg,+Pocket+K,+Nehru+Nagar+III,+Ghaziabad,+UP+201001", "_blank");
  };

  return (
    <section className="bg-white text-[#1A1A1A] font-poppins pb-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Metadata Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-8 pt-12 border-t border-gray-100">
          <div className="md:col-span-8">
            <span className="text-xs tracking-widest text-[#C8A96A] uppercase font-bold block mb-2">
              Find Us
            </span>
            <h2 className="text-2xl font-semibold text-[#21160e]">
              Our Venue Location
            </h2>
          </div>
          
          <div className="md:col-span-4 md:text-right">
            <button 
              onClick={handleDirectionsClick}
              className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 text-xs tracking-wider uppercase font-medium px-5 py-3 hover:bg-[#0A0A0A] hover:text-white hover:border-[#0A0A0A] transition-all duration-300"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C8A96A]" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>

        {/* Map Canvas and Quick Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Interactive Map Frame */}
          <div className="lg:col-span-8 bg-gray-50 border border-gray-100 p-2 min-h-[400px] lg:min-h-[480px] relative">
            <iframe
              title="Venue Location Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-700 ease-in-out"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Right Side: Arrival Information */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Location Card */}
            <div className="bg-[#FBFBFA] border border-gray-100 p-6 flex-1 flex flex-col justify-center">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#C8A96A] mb-4">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">
                Main Entrance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                74, Rakesh Marg, Pocket K,<br />
                Nehru Nagar III, Ghaziabad,<br />
                Uttar Pradesh, 201001
              </p>
            </div>

            {/* Timing Card */}
            <div className="bg-[#FBFBFA] border border-gray-100 p-6 flex-1 flex flex-col justify-center">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#C8A96A] mb-4">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#0A0A0A] uppercase tracking-wider mb-2">
                Office Hours
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5 font-normal">
                <li className="flex justify-between">
                  <span>Mon — Sat:</span>
                  <span className="font-medium text-gray-800">10:00 AM - 08:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-[#C8A96A]">By Appointment</span>
                </li>
              </ul>
            </div>

            {/* Helper Notice Block */}
            <div className="p-2">
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                * Secure basement parking structure is available on-site for all scheduled clients and guests.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}