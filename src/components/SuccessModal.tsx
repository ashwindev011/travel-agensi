import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
  redirectPath?: string;
}

export default function SuccessModal({ 
  isOpen, 
  onClose, 
  title = "Booking successful!", 
  message = "We will contact you soon to finalize your travel arrangements.",
  buttonText = "Back to Home",
  redirectPath = "/"
}: SuccessModalProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-[3rem] p-10 md:p-12 max-w-lg w-full text-center shadow-2xl"
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-24 h-24 bg-green-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              {message}
            </p>
            
            <button 
              onClick={handleClose}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand-600 transition-all shadow-xl shadow-slate-200"
            >
              {buttonText}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
