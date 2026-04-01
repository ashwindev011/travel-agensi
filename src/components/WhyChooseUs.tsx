import { Tag, Users, Globe, Zap, Headset, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Tag,
    title: 'Unmatched Experiences',
    description: 'At Budget Holidays, we focus on creating unique and memorable travel experiences. We curate every detail to ensure your journey is special, from handpicked accommodations to exclusive local tours.',
    color: 'bg-blue-500'
  },
  {
    icon: Users,
    title: 'Best Staff',
    description: 'Our team is the cornerstone of our service. Each member is selected for their deep-rooted passion for travel and their unwavering commitment to our guests.',
    color: 'bg-purple-500'
  },
  {
    icon: Globe,
    title: 'Diverse Destinations',
    description: 'Diversity is the spice of travel, and at Budget Holidays, our destination portfolio is a testament to this variety from Maldives to Malaysia.',
    color: 'bg-emerald-500'
  },
  {
    icon: Zap,
    title: 'Swift Assistance',
    description: 'We understand that time is of the essence. That’s why our assistance is as swift as it is helpful, ensuring your focus is on enjoying your journey.',
    color: 'bg-amber-500'
  },
  {
    icon: Headset,
    title: 'Best Customer Service',
    description: 'Our customer service is crafted around the philosophy of exceeding expectations. We listen, we care, and we deliver personalized experiences.',
    color: 'bg-rose-500'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(14,145,233,0.05),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="text-center lg:text-left">
            <div className="mb-12 md:mb-16">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block"
              >
                Our Advantages
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
              >
                Why Choose Budget Holidays
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-slate-500 leading-relaxed"
              >
                We combine affordability with excellence to create travel experiences that stay with you forever.
              </motion.p>
            </div>

            <div className="space-y-6 md:space-y-8 text-left">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 md:gap-6 group"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2 flex items-center gap-2">
                      {feature.title}
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-3 md:gap-4 h-[400px] md:h-[600px] mt-12 lg:mt-0"
          >
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <div className="h-2/3 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" 
                  alt="Beach"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-1/3 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800" 
                  alt="Mountains"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="h-1/3 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800" 
                  alt="Adventure"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="h-2/3 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" 
                  alt="Lake"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-slate-100 z-20"
            >
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold text-brand-600 mb-1">15+</p>
                <p className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
