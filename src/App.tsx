/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Booking from './pages/Booking';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
}
