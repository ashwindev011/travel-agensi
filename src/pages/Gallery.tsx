import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';
import { Instagram, Maximize2 } from 'lucide-react';
import ImagePopup from '../components/ImagePopup';

const images = [
  { url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800', title: 'Maldives Bliss', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800', title: 'Bali Temples', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&q=80&w=800', title: 'Thai Islands', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800', title: 'Swiss Alps', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800', title: 'Dubai Premium', size: 'medium' },
  { url: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800', title: 'Kerala Backwaters', size: 'small' },
  { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800', title: 'Mountain Trek', size: 'large' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800', title: 'Tropical Coast', size: 'small' },
];

export default function Gallery() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index: number) => {
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Layout>
      <ImagePopup 
        images={images}
        currentIndex={currentImageIndex}
        isOpen={isPopupOpen}
        onClose={closePopup}
        onNext={nextImage}
        onPrev={prevImage}
      />
      <div className="min-h-screen pt-24 pb-20 bg-white">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Our Travel Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 max-w-2xl mx-auto"
          >
            A collection of beautiful moments captured by our travelers around the world.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-32">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer rounded-[2rem] overflow-hidden break-inside-avoid"
                onClick={() => openPopup(index)}
              >
                <img 
                  src={img.url} 
                  srcSet={`${img.url.replace('&w=800', '&w=400')} 400w, ${img.url} 800w, ${img.url.replace('&w=800', '&w=1200')} 1200w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                  <Maximize2 className="w-10 h-10 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                  <p className="text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
              <Instagram className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Follow our journey on Instagram</h2>
            <p className="text-xl text-slate-500 mb-10 max-w-xl mx-auto">
              Join our community of 50k+ travelers and get daily inspiration for your next trip.
            </p>
            <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-slate-200">
              @budgetholidaysindia
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
