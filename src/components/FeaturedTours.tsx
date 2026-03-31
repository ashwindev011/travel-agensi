import { motion } from 'motion/react';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data/tours';

export default function FeaturedTours() {
  // Show first 2 tours as featured
  const featuredTours = packages.slice(0, 2);

  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block"
            >
              Handpicked for you
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900"
            >
              Featured Tour Packages
            </motion.h2>
          </div>
          <Link 
            to="/tour-packages"
            className="group flex items-center justify-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors"
          >
            Explore All Tours
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {featuredTours.map((tour, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200"
            >
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
              
              <div className="absolute top-8 left-8">
                <span className="px-5 py-2 bg-brand-500 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {tour.tag}
                </span>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-white font-bold">{tour.rating}</span>
                  </div>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock className="w-4 h-4" /> {tour.duration}
                  </div>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Users className="w-4 h-4" /> {tour.groupSize}
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-brand-400 transition-colors">
                  {tour.title}
                </h3>
                
                <div className="flex items-center justify-between">
                  <p className="text-white/60 font-medium">{tour.location}</p>
                  <Link 
                    to={`/tour/${tour.id}`}
                    className="w-14 h-14 bg-white text-slate-900 rounded-2xl flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all transform group-hover:scale-110"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
