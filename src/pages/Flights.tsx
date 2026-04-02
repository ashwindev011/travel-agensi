import React, { useState } from 'react';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import SuccessModal from '../components/SuccessModal';
import { Plane, Calendar, Users, MapPin, Search, ArrowRightLeft, Award, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function Flights() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    class: 'economy'
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
      {isLoading && <Loading fullScreen text="Searching for best flights..." />}
      
      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Inquiry Received!"
        message="We've received your flight inquiry. Our travel experts will check the best available rates and contact you soon."
      />

      <div className="min-h-screen pt-24 pb-20 bg-slate-50">
        {/* Header */}
        <div className="relative h-[400px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Flights"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900" />
          <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Fly Anywhere
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Book your next adventure with our exclusive flight deals and seamless booking experience.
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
                {/* From */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    From
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Departure City"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium"
                      value={formData.from}
                      onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* To */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-500" />
                    To
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Destination City"
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium"
                      value={formData.to}
                      onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                      required
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-brand-500 cursor-pointer hover:rotate-180 transition-transform duration-500">
                      <ArrowRightLeft className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    Departure Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>

                {/* Passengers */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-500" />
                    Passengers
                  </label>
                  <select
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium appearance-none"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value) })}
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>

                {/* Class */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <Plane className="w-4 h-4 text-brand-500" />
                    Travel Class
                  </label>
                  <select
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-500 rounded-2xl py-4 px-6 outline-none transition-all text-slate-900 font-medium appearance-none"
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  >
                    <option value="economy">Economy</option>
                    <option value="premium">Premium Economy</option>
                    <option value="business">Business Class</option>
                    <option value="first">First Class</option>
                  </select>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-3 group"
                  >
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Search Flights
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Features */}
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Global Connectivity', desc: 'Connect to over 200+ destinations worldwide with our partner airlines.' },
              { title: 'Flexible Booking', desc: 'Change your flight dates with zero change fees on select airlines.' },
              { title: '24/7 Support', desc: 'Our travel experts are always here to help you with your journey.' }
            ].map((f, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto text-brand-600">
                  <Plane className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Why Book with Us */}
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Advantage</span>
            <h2 className="text-4xl font-bold text-slate-900">Why Book Flights with Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Best Price Guarantee', desc: 'We compare thousands of flights to ensure you get the lowest possible fare.', icon: Award },
              { title: '24/7 Expert Support', desc: 'Our travel experts are always available to help with bookings or changes.', icon: Clock },
              { title: 'Secure Payments', desc: 'Your transactions are protected by industry-leading security protocols.', icon: ShieldCheck }
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
