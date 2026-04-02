import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Star, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1920",
    title: "Escape to the",
    highlight: "Maldives.",
    description: "Experience crystal clear waters, pristine white sand beaches, and ultimate relaxation in our premium resorts.",
    cta: "View Offers",
    link: "/hotel-resort"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1920",
    title: "Discover God's",
    highlight: "Own Country.",
    description: "Cruise through the serene backwaters of Kerala and immerse yourself in rich cultural heritage and lush green landscapes.",
    cta: "Explore Kerala",
    link: "/tour-packages"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8 md:space-y-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4 md:space-y-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/20">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-brand-400 fill-current" /> ✨ Featured Destination
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  {slides[currentSlide].title} <br />
                  <span className="text-brand-400">{slides[currentSlide].highlight}</span>
                </h1>
                <p className="text-base md:text-xl text-slate-200 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={slides[currentSlide].link}
                  className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20"
                >
                  {slides[currentSlide].cta} <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 pt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-8 bg-brand-400' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: Stats / Info Cards (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex flex-col gap-6 justify-center items-end"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-sm w-full shadow-2xl hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Destinations</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">Explore our wide range of curated destinations across the globe.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-sm w-full shadow-2xl hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10k+</p>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">Join thousands of satisfied travelers who trust our services.</p>
            </div>
            
            {/* Floating Review Card */}
            <div className="bg-white p-6 rounded-3xl shadow-2xl max-w-sm w-full relative mt-4 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      className="w-8 h-8 rounded-full border-2 border-white"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400">+2k reviews</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-xs font-bold text-slate-700 leading-relaxed">
                "The best travel agency I've ever used. Highly recommended!"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
