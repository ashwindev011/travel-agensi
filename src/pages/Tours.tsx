import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'motion/react';
import { Clock, Users, Star, MapPin, ArrowRight } from 'lucide-react';
import { packages } from '../data/tours';

export default function Tours() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 bg-slate-50">
        {/* Header */}
        <div className="relative h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            srcSet="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800 800w, https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1600 1600w, https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2400 2400w"
            sizes="100vw"
            className="absolute inset-0 w-full h-full object-cover opacity-40 bg-slate-900"
            alt="Tours"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900" />
          <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Tour Packages
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Explore our handpicked collection of unforgettable travel experiences.
            </motion.p>
          </div>
        </div>

        {/* Filters Placeholder */}
        <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {['All Tours'].map((cat) => (
                <button 
                  key={cat}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    cat === 'All Tours' ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-500 text-sm font-medium">Sort by:</span>
              <select className="bg-slate-50 border-none rounded-xl py-2 px-4 text-sm font-bold text-slate-900 outline-none cursor-pointer">
                <option>Popularity</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-300 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    srcSet={pkg.image.includes('&w=') ? `${pkg.image.replace(/&w=\d+/, '&w=400')} 400w, ${pkg.image.replace(/&w=\d+/, '&w=800')} 800w, ${pkg.image.replace(/&w=\d+/, '&w=1200')} 1200w` : undefined}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-slate-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                      {pkg.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-3 shadow-lg">
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-slate-900 font-bold text-sm">{pkg.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 text-brand-600 text-sm font-bold uppercase tracking-wider mb-3">
                    <MapPin className="w-4 h-4" />
                    {pkg.location}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-brand-600 transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Clock className="w-4 h-4 text-brand-500" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Users className="w-4 h-4 text-brand-500" />
                      {pkg.groupSize}
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Explore</span>
                      <span className="text-xl font-bold text-slate-900">View Details</span>
                    </div>
                    <div className="flex gap-2">
                      <Link 
                        to={`/booking/${pkg.id}`}
                        className="flex-1 bg-brand-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm hover:bg-brand-700 transition-all flex items-center justify-center"
                      >
                        Book Now
                      </Link>
                      <Link 
                        to={`/tour/${pkg.id}`}
                        className="bg-slate-900 text-white p-3 sm:p-4 rounded-2xl hover:bg-brand-600 transition-all group/btn"
                      >
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
