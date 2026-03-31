import { motion } from 'motion/react';
import { ArrowRight, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-3 md:space-y-4">
              <span className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm">
                Plan your The best
              </span>
              <h2 className="text-3xl md:text-6xl font-bold text-slate-900 leading-tight">
                Travelling
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Welcome to Budget Holidays, where each journey is a tapestry of vivid memories and dreams come to life. Our passion is to weave your travel aspirations into breathtaking realities, crafting escapes that resonate with wonder and joy. Immerse yourself in the expertise of our vibrant, dedicated team, who are artists in creating not just trips, but life-enriching experiences. With us, every destination is a treasure trove of moments, waiting to unfold into your own personal story of adventure and discovery.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link 
                to="/tour-packages"
                className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20"
              >
                View All Tours <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/about-us"
                className="px-8 py-4 bg-slate-50 text-slate-900 rounded-2xl font-bold hover:bg-slate-100 transition-all border border-slate-200"
              >
                Read More
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Visual/Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative Circles */}
              <div className="absolute inset-0 bg-brand-50 rounded-full animate-pulse" />
              <div className="absolute inset-4 border-2 border-dashed border-brand-200 rounded-full animate-spin-slow" />
              
              {/* Logo Icon Box */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-[3rem] shadow-2xl shadow-brand-200 flex flex-col items-center justify-center p-8 border border-slate-100">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-brand-600 rounded-3xl flex items-center justify-center shadow-lg shadow-brand-200 mb-6">
                    <Plane className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                      Budget<span className="text-brand-600">Holidays</span>
                    </p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">In India</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-2xl shadow-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-2xl">★</span>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-slate-900 rounded-3xl shadow-lg flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <p className="text-lg font-bold">10k+</p>
                  <p className="text-[8px] uppercase font-bold text-slate-400">Happy Clients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
