import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Flight Booking',
    path: '/flight-booking',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    color: 'bg-blue-500'
  },
  {
    title: 'Hotel & Resort',
    path: '/hotel-resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    color: 'bg-purple-500'
  },
  {
    title: 'Tour Packages',
    path: '/tour-packages',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    color: 'bg-emerald-500'
  }
];

export default function TravelCategories() {
  return (
    <section className="py-20 md:py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block"
          >
            What we offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
          >
            Explore Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-64 md:h-80 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200"
            >
              <Link to={cat.path}>
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                    {cat.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform">
                    Explore Details
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
