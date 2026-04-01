import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Headset, Zap, Star, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-slate-50 overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50/50 skew-x-12 translate-x-20 z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-100/30 rounded-full blur-3xl z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content & Text Boxes */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 md:space-y-10"
          >
            <div className="space-y-4 md:space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest"
              >
                <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" /> ✨ Your Journey Starts Here
              </motion.span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Explore India <br />
                <span className="text-brand-600">Your Way.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-600 max-w-xl leading-relaxed">
                Discover breathtaking destinations and curated holiday packages that fit your budget without compromising on luxury.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/tour-packages"
                className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20"
              >
                Start Planning <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/tour-packages"
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm"
              >
                View Packages
              </Link>
            </div>

            {/* Highlight Text Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-4">
              {[
                { icon: ShieldCheck, text: "100% Secure Booking", color: "text-emerald-600", bg: "bg-emerald-50" },
                { icon: Headset, text: "24/7 Support", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Zap, text: "Memorable Journeys", color: "text-amber-600", bg: "bg-amber-50" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className={`${item.bg} p-3 md:p-4 rounded-2xl flex items-center gap-3 border border-white shadow-sm`}
                >
                  <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
                  <span className="text-[10px] md:text-xs font-bold text-slate-700 leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Box */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 md:gap-8 pt-6 border-t border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl flex items-center justify-center">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-slate-900">500+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destinations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-slate-900">10k+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image Layout */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative grid grid-cols-12 gap-3 md:gap-4 h-[400px] sm:h-[500px] md:h-[600px]">
              {/* Main Large Image */}
              <div className="col-span-8 h-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200" 
                  alt="Taj Mahal"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Stacked Side Images */}
              <div className="col-span-4 space-y-3 md:space-y-4">
                <div className="h-[45%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800" 
                    alt="Kerala"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-[55%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800" 
                    alt="Maldives"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Floating Review Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-12 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 z-20 max-w-[180px] md:max-w-[240px]"
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1, 2, 3].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white"
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <span className="text-[8px] md:text-xs font-bold text-slate-400">+2k reviews</span>
                </div>
                <div className="flex items-center gap-1 text-amber-400 mb-1 md:mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 md:w-3 md:h-3 fill-current" />)}
                </div>
                <p className="text-[9px] md:text-xs font-bold text-slate-700 leading-relaxed">
                  "The best travel agency I've ever used. Highly recommended!"
                </p>
              </motion.div>

              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 md:w-24 md:h-24 bg-amber-400 rounded-full flex items-center justify-center shadow-xl border-2 md:border-4 border-white z-20 animate-bounce-slow">
                <div className="text-center">
                  <p className="text-white font-black text-sm md:text-xl leading-none">BEST</p>
                  <p className="text-white font-bold text-[6px] md:text-[8px] uppercase tracking-widest">Choice</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
