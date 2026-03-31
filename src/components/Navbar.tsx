import React, { useState, useEffect } from 'react';
import { Plane, Search, Menu, X, Home, Info, Map, PlaneTakeoff, Hotel, Image as ImageIcon, Phone, ArrowRight, Instagram, Facebook, Twitter, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on window resize (if screen becomes large)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about-us', icon: Info },
    { name: 'Tour Packages', path: '/tour-packages', icon: Map },
    { name: 'Flight Booking', path: '/flight-booking', icon: PlaneTakeoff },
    { name: 'Hotel & Resort', path: '/hotel-resort', icon: Hotel },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
      scrolled ? 'px-4 sm:px-6 lg:px-8 pt-4' : 'px-0 pt-0'
    }`}>
      <nav className={`pointer-events-auto w-full transition-all duration-500 ${
        scrolled 
          ? 'max-w-7xl bg-white/90 backdrop-blur-lg shadow-lg shadow-slate-200/50 border border-slate-200/50 rounded-2xl py-3 px-4' 
          : 'max-w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-4 px-4 sm:px-6 lg:px-8'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-200"
            >
              <Plane className="w-6 h-6 text-white" />
            </motion.div>
            <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
              Budget<span className="text-brand-600">Holidays</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-600">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`hover:text-brand-600 transition-colors relative group ${location.pathname === item.path ? 'text-brand-600' : ''}`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-600 transition-all group-hover:w-full ${location.pathname === item.path ? 'w-full' : 'w-0'}`} />
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-slate-900 p-3 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden pointer-events-auto"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Menu Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-slate-900">Menu</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-3 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                          location.pathname === item.path 
                            ? 'bg-brand-50 text-brand-600' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            location.pathname === item.path 
                              ? 'bg-brand-100 text-brand-600' 
                              : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-brand-600'
                          }`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-lg">{item.name}</span>
                        </div>
                        <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                          location.pathname === item.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Quick Search</p>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Search destinations..."
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-brand-500 transition-all text-sm font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Follow Us</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, i) => (
                      <a 
                        key={i} 
                        href={social.href}
                        className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-600 hover:shadow-md transition-all"
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-900">Budget Holidays India</p>
                  <p className="text-xs text-slate-500">Crafting memories since 2010</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
