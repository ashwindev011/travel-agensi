import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Loading from '../components/Loading';
import SuccessModal from '../components/SuccessModal';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Mail, Phone, User, CreditCard, ArrowLeft, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { packages } from '../data/tours';

export default function Booking() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = packages.find(p => p.id === id);
  const [step, setStep] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    travelers: 1,
    specialRequests: ''
  });

  if (!tour) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tour Not Found</h1>
          <Link 
            to="/tour-packages"
            className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Tours
          </Link>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Final submission
      setIsBooking(true);
      // Simulate API call
      setTimeout(() => {
        setIsBooking(false);
        setShowSuccess(true);
      }, 3000);
    }
  };

  return (
    <Layout>
      {isBooking && <Loading fullScreen text="Processing your booking..." />}
      
      <SuccessModal 
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Booking successful!"
        message="We will contact you soon to finalize your travel arrangements."
      />

      <div className="min-h-screen pt-24 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
              >
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-12 relative">
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                  <div 
                    className="absolute top-1/2 left-0 h-0.5 bg-brand-600 -translate-y-1/2 z-0 transition-all duration-500" 
                    style={{ width: `${((step - 1) / 1) * 100}%` }}
                  />
                  {[1, 2].map((s) => (
                    <div 
                      key={s}
                      className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 ${
                        s <= step ? 'bg-brand-600 text-white shadow-lg shadow-brand-200' : 'bg-white text-slate-400 border-2 border-slate-100'
                      }`}
                    >
                      {s < step ? <CheckCircle2 className="w-6 h-6" /> : s}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
                            <p className="text-slate-500">Tell us who is traveling.</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                            <input 
                              type="text" 
                              required
                              value={formData.fullName}
                              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                              placeholder="John Doe"
                              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              placeholder="john@example.com"
                              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="+91 123 456 7890"
                              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600">
                            <Calendar className="w-6 h-6" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900">Trip Details</h2>
                            <p className="text-slate-500">When and how many people?</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-700 ml-1">Preferred Date</label>
                            <input 
                              type="date" 
                              required
                              value={formData.date}
                              onChange={(e) => setFormData({...formData, date: e.target.value})}
                              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-3">
                            <label className="text-sm font-bold text-slate-700 ml-1">Number of Travelers</label>
                            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl">
                              <button 
                                type="button"
                                onClick={() => setFormData({...formData, travelers: Math.max(1, formData.travelers - 1)})}
                                className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl font-bold hover:bg-brand-600 hover:text-white transition-all"
                              >
                                -
                              </button>
                              <span className="flex-1 text-center font-bold text-lg">{formData.travelers}</span>
                              <button 
                                type="button"
                                onClick={() => setFormData({...formData, travelers: formData.travelers + 1})}
                                className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl font-bold hover:bg-brand-600 hover:text-white transition-all"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-bold text-slate-700 ml-1">Special Requests (Optional)</label>
                          <textarea 
                            rows={4}
                            value={formData.specialRequests}
                            onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                            placeholder="Dietary requirements, accessibility needs, etc."
                            className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                          ></textarea>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                    {step > 1 ? (
                      <button 
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-8 py-4 text-slate-500 font-bold hover:text-slate-900 transition-colors flex items-center gap-2"
                      >
                        <ArrowLeft className="w-5 h-5" /> Back
                      </button>
                    ) : (
                      <div />
                    )}
                    <button 
                      type="submit"
                      className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-slate-200"
                    >
                      {step === 2 ? 'Confirm Booking' : 'Continue'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
                  <div className="relative h-48 -mx-8 -mt-8 mb-8">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <h3 className="text-xl font-bold text-white">{tour.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">Duration</span>
                      <span className="text-slate-900 font-bold flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-500" /> {tour.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500 font-medium">Travelers</span>
                      <span className="text-slate-900 font-bold">{formData.travelers}</span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
                    <ShieldCheck className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure Payment</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 text-center">
                    <CheckCircle2 className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Instant Booking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
