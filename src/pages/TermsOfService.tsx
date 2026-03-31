import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
          >
            Terms of Service
          </motion.h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg">Last updated: March 31, 2026</p>
            <p>
              By using the Budget Holidays India website and services, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully before using our platform.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Use of Our Services</h2>
            <p>
              You must be at least 18 years old to use our services and make travel bookings. You are responsible for providing accurate and complete information when using our platform.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Booking and Payments</h2>
            <p>
              All bookings are subject to availability and the terms and conditions of our travel partners (airlines, hotels, etc.). Bookings are finalized upon confirmation from our travel partners.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Cancellations and Refunds</h2>
            <p>
              Cancellation and refund policies vary by travel partner and tour package. Please review the specific terms for your booking before confirming.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Limitation of Liability</h2>
            <p>
              Budget Holidays India is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our services or any travel-related issues.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any disputes arising from these terms will be resolved in the courts of New Delhi.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
