import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
          >
            Privacy Policy
          </motion.h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg">Last updated: March 31, 2026</p>
            <p>
              At Budget Holidays India, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you book a tour, flight, or hotel, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and payment information.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide and improve our services, process your bookings, communicate with you about your travel plans, and send you promotional offers and updates.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with our trusted partners, such as airlines and hotels, only as necessary to fulfill your travel bookings.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You can also opt-out of receiving promotional communications from us at any time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
