import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Solo Traveler',
    content: 'Budget Holidays made my dream trip to the Maldives a reality. The attention to detail and the personalized service was beyond my expectations!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    role: 'Family Trip',
    content: 'Our family tour to Kerala was perfectly organized. From the houseboat to the spice plantations, everything was seamless. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Adventure Seeker',
    content: 'The Dubai desert safari was the highlight of my year. The team at Budget Holidays knows exactly how to balance adventure with comfort.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-slate-900 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What Our Travelers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 relative group hover:bg-white/10 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-500/20 group-hover:text-brand-500/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < t.rating ? 'text-amber-400 fill-current' : 'text-white/20'}`} 
                  />
                ))}
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
