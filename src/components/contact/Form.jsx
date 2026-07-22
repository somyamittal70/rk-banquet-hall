import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been sent successfully.');
  };

  return (
    <section className="bg-white text-[#1A1A1A] font-poppins py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Details */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
            <div>
              <span className="text-xs tracking-widest text-[#C8A96A] uppercase font-bold block mb-2">
                Get In Touch
              </span>
              <h2 className="text-3xl font-semibold text-[#21160e]">
                Contact Information
              </h2>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Have questions or looking to book your next assembly? Reach out directly through any of our support channels below.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              {/* Phone info channel */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase font-semibold tracking-wider">Call Us</span>
                  <a href="tel:+919891018675" className="text-sm text-gray-800 hover:text-[#C8A96A] transition-colors font-medium font-mono">
                    +91-9891018675
                  </a>
                </div>
              </div>

              {/* Email info channel */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase font-semibold tracking-wider">Email Us</span>
                  <a href="mailto:events@rkbanquet.com" className="text-sm text-gray-800 hover:text-[#C8A96A] transition-colors font-medium">
                    events@rkbanquet.com
                  </a>
                </div>
              </div>

              {/* Physical Address channel */}
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#C8A96A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 uppercase font-semibold tracking-wider">Location</span>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    74, Rakesh Marg, Pocket K, Nehru Nagar III,<br />
                    Nehru Nagar, Ghaziabad, Uttar Pradesh, 201001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Simple Clean Form */}
          <div className="lg:col-span-7 bg-[#FBFBFA] border border-gray-100 p-6 sm:p-10 rounded-none shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A96A] transition-colors" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A96A] transition-colors" 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  className="w-full bg-white border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#C8A96A] transition-colors" 
                  placeholder="How can we help you?" 
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-2">Your Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  required
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full bg-white border border-gray-200 p-4 text-sm text-gray-800 focus:outline-none focus:border-[#C8A96A] transition-colors resize-none" 
                  placeholder="Write your message details here..." 
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 w-full bg-[#21160e] text-white font-medium text-sm tracking-wider uppercase py-3.5 hover:bg-[#C8A96A] transition-colors duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}