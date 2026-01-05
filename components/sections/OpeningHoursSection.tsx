"use client";
import { useOpeningStatus } from '@/hooks/useOpeningStatus';
import { Clock, CalendarOff, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningHoursSection() {
  const { status } = useOpeningStatus();

  if (!status) return null; // Loading state or hydration mismatch prevention

  const isOpen = status.status === 'OPEN';

  return (
    <div className="w-full max-w-lg">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl shadow-md overflow-hidden flex items-center p-4 gap-4 ${isOpen
            ? 'bg-white/90 backdrop-blur-sm'
            : 'bg-white/90 backdrop-blur-sm'
            }`}
        >
          <div className={`p-2 rounded-full flex-shrink-0 ${isOpen ? 'bg-green-100/50 text-green-700' : 'bg-red-100/50 text-red-600'}`}>
            {isOpen ? <CheckCircle2 className="w-5 h-5" /> : <CalendarOff className="w-5 h-5" />}
          </div>

          <div className="flex-1">
            <h3 className="font-heading font-bold text-gray-900 text-sm flex items-center gap-2">
              {status.message}
            </h3>
            <p className="text-gray-500 text-xs">{status.detail}</p>
          </div>

          <div className="hidden sm:block text-right border-l border-gray-100 pl-4">
            <Clock className="w-5 h-5 text-gray-400" />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
