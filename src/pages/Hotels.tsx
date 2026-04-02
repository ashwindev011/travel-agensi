import React, { useState } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import SuccessModal from '../components/SuccessModal';
import { Hotel, Calendar, Users, MapPin, Search, Star, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hotels() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <Layout>
      {isLoading && <Loading fullScreen text="Searching for luxury stays..." />}
      
      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Inquiry Received!"
        message="We've received your hotel inquiry. Our travel experts will check the best available rates and contact you soon."
      />

      <div className="min-h-screen pt-24 pb-20 bg-slate-50">
        {/* Header */}
        <div className="relative h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Hotels"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900" />
          <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Premium Stays
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Discover handpicked hotels and resorts for your perfect getaway.
            </motion.p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Location */}
                <div className="space-y-3 lg:col-span-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    Destination / Hotel Name
                  </label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                  />
                </div>

                {/* Check In */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    Check In
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    required
                  />
                </div>

                {/* Check Out */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    Check Out
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    required
                  />
                </div>

                {/* Guests */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-500" />
                    Guests
                  </label>
                  <select
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium appearance-none"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Rooms */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Hotel className="w-4 h-4 text-brand-500" />
                    Rooms
                  </label>
                  <select
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium appearance-none"
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: parseInt(e.target.value) })}
                  >
                    {[1, 2, 3, 4].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Room' : 'Rooms'}</option>
                    ))}
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end lg:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-3 group"
                  >
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Search Hotels
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Featured Hotels */}
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Resorts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Azure Bay Resort', location: 'Maldives', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800' },
              { name: 'Mountain View Lodge', location: 'Switzerland', image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800' },
              { name: 'Desert Oasis Spa', location: 'Dubai', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800' }
            ].map((h, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-4">
                  <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-bold">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{h.name}</h3>
                <p className="text-slate-500 flex items-center gap-1 mb-2">
                  <MapPin className="w-4 h-4" /> {h.location}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Why Book with Us */}
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Advantage</span>
            <h2 className="text-4xl font-bold text-slate-900">Why Book Hotels with Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Best Price Guarantee', desc: 'We negotiate directly with hotels to bring you the best rates available.', icon: Award },
              { title: 'Handpicked Selection', desc: 'Every hotel in our collection is personally vetted for quality and service.', icon: Star },
              { title: 'Flexible Booking', desc: 'Most of our hotels offer free cancellation and flexible check-in options.', icon: Calendar }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
