import React from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';

interface LoadingProps {
  fullScreen?: boolean;
  text?: string;
}

export default function Loading({ fullScreen = false, text = 'Loading...' }: LoadingProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-brand-100 border-t-brand-600 rounded-full"
        />
        
        {/* Inner Plane Icon */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-brand-600"
        >
          <Plane className="w-8 h-8" />
        </motion.div>
      </div>
      
      {text && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="text-slate-500 font-bold uppercase tracking-widest text-xs"
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-md flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}
