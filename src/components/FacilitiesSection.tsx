import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Ticket, 
  FileCheck, 
  ShieldCheck, 
  Ship, 
  Hotel, 
  Car, 
  Calendar,
  ArrowRight
} from 'lucide-react';

const facilities = [
  { title: 'Tour Operator', icon: Globe, color: 'bg-blue-50 text-blue-600' },
  { title: 'Online Ticketing', icon: Ticket, color: 'bg-orange-50 text-orange-600' },
  { title: 'Passport & Visa', icon: FileCheck, color: 'bg-green-50 text-green-600' },
  { title: 'Travel Insurance', icon: ShieldCheck, color: 'bg-red-50 text-red-600' },
  { title: 'Cruise Services', icon: Ship, color: 'bg-cyan-50 text-cyan-600' },
  { title: 'Hotel Booking', icon: Hotel, color: 'bg-brand-50 text-brand-600' },
  { title: 'Car Rental', icon: Car, color: 'bg-slate-50 text-slate-600' },
  { title: 'Event Organizers', icon: Calendar, color: 'bg-purple-50 text-purple-600' },
];

export default function FacilitiesSection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our Services
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Comprehensive Travel <span className="text-brand-600">Facilities</span> for Every Journey
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-slate-50 rounded-[2rem] p-8 text-center border border-transparent hover:border-brand-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
                <div className={`w-16 h-16 ${facility.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <facility.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {facility.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
