import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Tour Packages', path: '/tour-packages' },
    { name: 'Flight Booking', path: '/flight-booking' },
    { name: 'Hotel & Resort', path: '/hotel-resort' },
  ];

  const policyLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 md:pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Budget<span className="text-brand-500">Holidays</span></span>
            </div>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0">
              Making luxury travel accessible for everyone. We provide curated experiences that combine comfort with affordability.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -4, color: '#0ea5e9' }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 md:mb-8">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-500 transition-colors flex items-center justify-center md:justify-start gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 md:mb-8">Contact Us</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-500" />
                </div>
                <span className="text-sm md:text-base">123 Travel Plaza, Tourism Way, Mumbai, India</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-500" />
                </div>
                <span className="text-sm md:text-base">+91 98765 43210</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-500" />
                </div>
                <span className="text-sm md:text-base">hello@budgetholidays.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-6 md:mb-8">Newsletter</h4>
            <p className="text-sm md:text-base text-slate-400 mb-6">Subscribe to get the latest travel deals and updates.</p>
            <form className="space-y-4 max-w-sm mx-auto md:mx-0">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full bg-slate-800 border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-brand-500 transition-all outline-none text-sm"
                />
              </div>
              <button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-900/20 text-sm">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-slate-500 text-center md:text-left">
          <p>© {currentYear} Budget Holidays India. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {policyLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
