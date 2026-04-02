import React, { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'motion/react';
import { Clock, Users, Star, MapPin, CheckCircle2, Calendar, ArrowLeft, ShieldCheck, Wifi, Coffee, Waves, Utensils, Wind, Sparkles, Car, ChevronLeft, ChevronRight, Maximize2, Share2, Facebook, Twitter, Link as LinkIcon, Check } from 'lucide-react';
import { packages } from '../data/tours';
import ImagePopup from '../components/ImagePopup';

const getFacilityIcon = (facility: string) => {
  const f = facility.toLowerCase();
  if (f.includes('wi-fi')) return <Wifi className="w-5 h-5" />;
  if (f.includes('pool')) return <Waves className="w-5 h-5" />;
  if (f.includes('spa') || f.includes('wellness')) return <Sparkles className="w-5 h-5" />;
  if (f.includes('restaurant') || f.includes('meal')) return <Utensils className="w-5 h-5" />;
  if (f.includes('air conditioning') || f.includes('heating')) return <Wind className="w-5 h-5" />;
  if (f.includes('bar') || f.includes('room service')) return <Coffee className="w-5 h-5" />;
  if (f.includes('shuttle') || f.includes('parking')) return <Car className="w-5 h-5" />;
  return <CheckCircle2 className="w-5 h-5" />;
};

export default function TourDetails() {
  const { id } = useParams<{ id: string }>();
  const tour = packages.find(p => p.id === id);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openPopup = (index: number) => {
    setCurrentImageIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const nextImage = () => {
    if (tour?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % tour.gallery!.length);
    }
  };

  const prevImage = () => {
    if (tour?.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + tour.gallery!.length) % tour.gallery!.length);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!tour) {
    return (
      <Layout>
        <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Tour Not Found</h1>
          <p className="text-slate-500 mb-8 text-center max-w-md">
            We couldn't find the tour you're looking for. It might have been moved or is no longer available.
          </p>
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

  return (
    <Layout>
      {tour.gallery && (
        <ImagePopup 
          images={tour.gallery.map(url => ({ url, title: tour.title }))}
          currentIndex={currentImageIndex}
          isOpen={isPopupOpen}
          onClose={closePopup}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
      <div className="min-h-screen pt-24 pb-20 bg-slate-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] md:h-[60vh] overflow-hidden">
          <img 
            src={tour.image.includes('&w=') ? tour.image.replace(/&w=\d+/, '&w=1600') : tour.image}
            srcSet={tour.image.includes('&w=') ? `${tour.image.replace(/&w=\d+/, '&w=800')} 800w, ${tour.image.replace(/&w=\d+/, '&w=1600')} 1600w, ${tour.image.replace(/&w=\d+/, '&w=2400')} 2400w` : undefined}
            sizes="100vw"
            alt={tour.title}
            className="absolute inset-0 w-full h-full object-cover bg-slate-200"
            referrerPolicy="no-referrer"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-end pb-12 md:pb-20">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-brand-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {tour.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white font-bold text-sm">{tour.rating}</span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    {tour.title}
                  </h1>
                  <div className="relative mt-2">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all border border-white/20"
                      aria-label="Share tour"
                    >
                      <Share2 className="w-6 h-6" />
                    </button>

                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl py-2 z-50 border border-slate-100">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors"
                        >
                          <Facebook className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-medium">Facebook</span>
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out this tour: ' + tour.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors"
                        >
                          <Twitter className="w-5 h-5 text-sky-500" />
                          <span className="text-sm font-medium">Twitter</span>
                        </a>
                        <button
                          onClick={handleCopyLink}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 text-slate-700 transition-colors"
                        >
                          {copied ? <Check className="w-5 h-5 text-emerald-500" /> : <LinkIcon className="w-5 h-5 text-slate-400" />}
                          <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-brand-400" />
                    <span className="font-medium">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-400" />
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-brand-400" />
                    <span className="font-medium">{tour.groupSize}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12 md:space-y-16">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {tour.description}
                </p>
              </section>

              {/* Gallery */}
              {tour.gallery && tour.gallery.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-slate-900">Gallery</h2>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => scrollGallery('left')}
                        className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => scrollGallery('right')}
                        className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div 
                    ref={galleryRef}
                    className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory hide-scrollbar scroll-smooth"
                  >
                    {tour.gallery.map((img, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] h-64 rounded-[2rem] overflow-hidden snap-center shrink-0 shadow-lg shadow-slate-200/50 relative group cursor-pointer"
                        onClick={() => openPopup(index)}
                      >
                        <img 
                          src={img} 
                          srcSet={img.includes('&w=') ? `${img.replace(/&w=\d+/, '&w=400')} 400w, ${img.replace(/&w=\d+/, '&w=800')} 800w, ${img.replace(/&w=\d+/, '&w=1200')} 1200w` : undefined}
                          sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, 45vw"
                          alt={`${tour.title} gallery ${index + 1}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 bg-slate-100"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white">
                          <Maximize2 className="w-8 h-8 scale-50 group-hover:scale-100 transition-transform duration-500" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}

              {/* What's Included */}
              <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {tour.included.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                      <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Facilities */}
              {tour.facilities && tour.facilities.length > 0 && (
                <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Tour Facilities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors group">
                        <div className="text-brand-600 group-hover:scale-110 transition-transform">
                          {getFacilityIcon(facility)}
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{facility}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar / Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
                >
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <Calendar className="w-6 h-6 text-brand-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Next Departure</p>
                        <p className="text-slate-900 font-bold">Oct 15, 2026</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <ShieldCheck className="w-6 h-6 text-brand-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Guarantee</p>
                        <p className="text-slate-900 font-bold">Verified Package</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to={`/booking/${tour.id}`}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 text-lg"
                  >
                    Book This Tour
                  </Link>
                  
                  <p className="text-center text-slate-400 text-xs mt-6 font-medium">
                    * No hidden fees. Free cancellation up to 7 days before departure.
                  </p>
                </motion.div>

                {/* Help Card */}
                <div className="bg-brand-600 p-8 md:p-10 rounded-[3rem] text-white shadow-2xl shadow-brand-200">
                  <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
                  <p className="text-brand-100 mb-8 leading-relaxed">
                    Our travel experts are available 24/7 to help you plan your perfect trip.
                  </p>
                  <div className="space-y-4">
                    <a href="tel:+911234567890" className="flex items-center gap-4 hover:text-brand-100 transition-colors">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="font-bold">+91 123 456 7890</span>
                    </a>
                    <Link to="/contact" className="flex items-center gap-4 hover:text-brand-100 transition-colors">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-bold">Contact Support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        <div className="bg-white py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <div>
                <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4 block">Recommendations</span>
                <h2 className="text-4xl font-bold text-slate-900">Related Tour Packages</h2>
              </div>
              <Link 
                to="/tour-packages"
                className="hidden md:flex items-center gap-2 text-brand-600 font-bold hover:gap-4 transition-all"
              >
                View All Tours <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packages
                .filter(p => p.id !== tour.id && (p.location === tour.location || p.tag === tour.tag))
                .slice(0, 3)
                .map((pkg, i) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
                  >
                    <Link to={`/tour/${pkg.id}`} className="block relative h-64 overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-brand-600 uppercase tracking-widest shadow-lg">
                        {pkg.tag}
                      </div>
                    </Link>
                    <div className="p-8">
                      <div className="flex items-center gap-2 text-amber-400 mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-slate-900 font-bold text-sm">{pkg.rating}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                        <Link to={`/tour/${pkg.id}`}>{pkg.title}</Link>
                      </h3>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{pkg.duration}</span>
                        </div>
                        <Link 
                          to={`/tour/${pkg.id}`}
                          className="text-brand-600 font-bold text-sm hover:underline"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
