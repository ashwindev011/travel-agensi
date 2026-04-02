import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Globe, Heart, Shield, Zap, Target, ArrowRight, Star } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Heart, title: 'Passion for Travel', desc: 'We live and breathe travel, and we want to share that passion with you.' },
    { icon: Shield, title: 'Trust & Safety', desc: 'Your safety and peace of mind are our top priorities on every journey.' },
    { icon: Zap, title: 'Innovation', desc: 'We constantly look for new ways to make travel better and more affordable.' },
    { icon: Target, title: 'Customer First', desc: 'Everything we do is centered around creating the best experience for you.' }
  ];

  const timeline = [
    { year: '2010', title: 'The Beginning', desc: 'Budget Holidays was founded with a single desk and a big dream.' },
    { year: '2014', title: 'Expanding Horizons', desc: 'We reached our first 10,000 happy travelers and expanded to international tours.' },
    { year: '2018', title: 'Award Winning', desc: 'Recognized as the "Best Budget Travel Agency" in the region.' },
    { year: '2024', title: 'Digital Transformation', desc: 'Launched our new platform to make booking easier than ever.' }
  ];

  const team = [
    { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://i.pravatar.cc/300?img=32' },
    { name: 'Michael Chen', role: 'Head of Operations', image: 'https://i.pravatar.cc/300?img=12' },
    { name: 'Elena Rodriguez', role: 'Lead Travel Expert', image: 'https://i.pravatar.cc/300?img=45' },
    { name: 'David Smith', role: 'Customer Experience', image: 'https://i.pravatar.cc/300?img=11' }
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 bg-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] bg-slate-900 flex items-center justify-center overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="About Us"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-500/20 backdrop-blur-md border border-brand-500/30 text-brand-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Star className="w-3 h-3 fill-current" /> Since 2010
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight"
            >
              We Craft <span className="text-brand-500 italic">Memories</span>, Not Just Trips.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed"
            >
              Budget Holidays is dedicated to bringing the world closer to you, one affordable adventure at a time.
            </motion.p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-brand-600 font-bold tracking-widest uppercase text-sm">Our Mission</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Travel shouldn't be a <span className="text-brand-600">luxury</span> reserved for the few.
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2010, Budget Holidays India was born out of a simple idea: that travel shouldn't be a luxury reserved for the few. We believe that exploring new cultures, witnessing breathtaking landscapes, and creating lifelong memories should be accessible to everyone, regardless of their budget.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  'Handpicked Destinations',
                  'Expert Travel Guides',
                  '24/7 Customer Support',
                  'Customizable Packages'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-bold">
                    <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover"
                  alt="Team"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-brand-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-brand-200">
                    <Award className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-slate-900">15+</p>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-slate-900 py-32 px-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                Our Core Values
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                The Principles That Guide Us
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-500/20 rounded-2xl flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-32 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">From a Single Desk to Global Journeys</h2>
              </div>
              <div className="hidden md:block">
                <div className="w-20 h-20 bg-white rounded-full border border-slate-200 flex items-center justify-center text-slate-300">
                  <ArrowRight className="w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-2xl shadow-xl flex items-center justify-center text-brand-600 font-black text-xl mb-8 mx-auto lg:mx-0">
                    {item.year}
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Team</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Meet the Minds Behind Your Memories</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden mb-6 shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-brand-600 font-bold text-sm uppercase tracking-widest">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-50 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { label: 'Happy Travelers', value: '50k+', icon: Users },
                { label: 'Destinations', value: '200+', icon: Globe },
                { label: 'Tour Packages', value: '500+', icon: CheckCircle2 },
                { label: 'Expert Staff', value: '100+', icon: Award }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-white rounded-3xl shadow-xl shadow-slate-200 flex items-center justify-center mx-auto text-brand-600 group hover:bg-brand-600 hover:text-white transition-all duration-500">
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-5xl font-black text-slate-900 mb-2">{stat.value}</p>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-brand-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-200">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                  Ready to Start Your <span className="italic">Next Adventure?</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-brand-100 mb-12"
                >
                  Join thousands of happy travelers and discover the world's most beautiful destinations at unbeatable prices.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <Link 
                    to="/tour-packages"
                    className="w-full sm:w-auto px-10 py-5 bg-white text-brand-600 rounded-2xl font-bold text-lg hover:bg-brand-50 transition-all shadow-xl"
                  >
                    Explore Packages
                  </Link>
                  <Link 
                    to="/contact"
                    className="w-full sm:w-auto px-10 py-5 bg-brand-700 text-white rounded-2xl font-bold text-lg hover:bg-brand-800 transition-all border border-brand-500"
                  >
                    Contact Support
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
