import { motion } from 'framer-motion';
import { CultureHealthCard } from './CultureHealthCard';
import { AIInsightsPanel } from './AIInsightsPanel';
import { SentimentChart } from './SentimentChart';
import { FeedbackStream } from './FeedbackStream';
import { RiskRadar } from './RiskRadar';

export function OwnerPortal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 max-w-7xl mx-auto px-8 py-12"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Your Team's Voice,{' '}
          <span className="text-gradient">Visualized</span>
        </h1>
        <p className="text-xl text-gray-600">
          Real-time insights powered by Coro AI
        </p>
      </motion.div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <CultureHealthCard />
          <RiskRadar />
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-2 space-y-6">
          <SentimentChart />
          <AIInsightsPanel />
        </div>

        {/* Full Width - Feedback Stream */}
        <div className="lg:col-span-3">
          <FeedbackStream />
        </div>
      </div>
    </motion.div>
  );
}
