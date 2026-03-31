import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Home from '../pages/Home';
import About from '../pages/About';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Booking from '../pages/Booking';
import Flights from '../pages/Flights';
import Hotels from '../pages/Hotels';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService';
import CookiePolicy from '../pages/CookiePolicy';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex flex-col min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/tour-packages" element={<Tours />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/flight-booking" element={<Flights />} />
          <Route path="/hotel-resort" element={<Hotels />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
