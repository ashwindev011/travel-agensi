import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import TravelCategories from '../components/TravelCategories';
import AboutSection from '../components/AboutSection';
import FeaturedTours from '../components/FeaturedTours';
import FacilitiesSection from '../components/FacilitiesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Destinations from '../components/Destinations';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TravelCategories />
      <AboutSection />
      <FeaturedTours />
      <FacilitiesSection />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
      
      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                  Get Travel Tips & <span className="text-brand-500">Exclusive Deals</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-400 text-lg"
                >
                  Subscribe to our newsletter and be the first to know about our latest tour packages and special offers.
                </motion.p>
              </div>
              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="flex-1 px-8 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
                <button 
                  type="submit"
                  className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20"
                >
                  Subscribe
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
