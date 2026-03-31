import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

export default function CookiePolicy() {
  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
          >
            Cookie Policy
          </motion.h1>
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p className="text-lg">Last updated: March 31, 2026</p>
            <p>
              This Cookie Policy explains how Budget Holidays India uses cookies and similar technologies to provide and improve our services. By using our website, you consent to our use of cookies as described in this policy.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device and remember your preferences and settings.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Types of Cookies We Use</h2>
            <p>
              We use essential cookies for the operation of our website, performance cookies to analyze how you use our platform, and marketing cookies to provide you with personalized offers and advertisements.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Managing Cookies</h2>
            <p>
              You can manage your cookie preferences through your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Third-Party Cookies</h2>
            <p>
              We may also use third-party cookies from our trusted partners, such as Google Analytics, to help us understand how you interact with our platform and improve our services.
            </p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Updates to this Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. Please check this page regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
