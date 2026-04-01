import { MapPin, Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const destinations = [
  {
    name: 'Maldives',
    location: 'Indian Ocean',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    tag: 'Luxury'
  },
  {
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    tag: 'Culture'
  },
  {
    name: 'Thailand',
    location: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    tag: 'Adventure'
  },
  {
    name: 'Malaysia',
    location: 'Southeast Asia',
    image: 'https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    tag: 'City Life'
  }
];

export default function Destinations() {
  return (
    <section className="py-20 md:py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block"
            >
              Explore the World
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900"
            >
              Popular Destinations
            </motion.h2>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group flex items-center justify-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors"
          >
            View All Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-[350px] md:h-[400px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6">
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                    {dest.tag}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white text-sm font-bold">{dest.rating}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    {dest.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end px-4">
                <button className="text-brand-600 font-bold text-sm hover:underline">Book Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
