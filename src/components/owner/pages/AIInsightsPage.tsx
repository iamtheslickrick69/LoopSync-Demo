import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { AIInsightsPanel } from '../AIInsightsPanel';
import { GlassCard } from '../../shared/GlassCard';
import { Badge } from '../../shared/Badge';

export function AIInsightsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <Sparkles className="w-10 h-10 text-primary-500" />
          AI Insights
        </h1>
        <p className="text-gray-600">Powered by Coro AI - Deep analysis of your team's feedback</p>
      </motion.div>

      {/* Main Insights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <AIInsightsPanel />
      </motion.div>

      {/* Trending Themes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Trending Themes</h2>
        <GlassCard className="p-6">
          <div className="flex flex-wrap gap-3">
            {[
              { tag: 'Work-Life Balance', count: 24, trend: 'up' },
              { tag: 'Remote Work', count: 18, trend: 'up' },
              { tag: 'Career Growth', count: 15, trend: 'stable' },
              { tag: 'Team Communication', count: 14, trend: 'down' },
              { tag: 'Recognition', count: 12, trend: 'up' },
              { tag: 'Technical Debt', count: 10, trend: 'up' },
              { tag: 'Meeting Culture', count: 9, trend: 'stable' },
              { tag: 'Compensation', count: 8, trend: 'stable' },
            ].map((theme) => (
              <button
                key={theme.tag}
                className="glass px-4 py-2 rounded-full hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">{theme.tag}</span>
                  <Badge variant="secondary">{theme.count}</Badge>
                  {theme.trend === 'up' && (
                    <TrendingUp className="w-3 h-3 text-green-500" />
                  )}
                  {theme.trend === 'down' && (
                    <TrendingUp className="w-3 h-3 text-red-500 rotate-180" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Predictive Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Predictive Alerts</h2>
        <div className="space-y-4">
          <GlassCard className="p-6 border-l-4 border-orange-500">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">Engineering Burnout Risk Increasing</h3>
                  <Badge variant="warning">High Probability</Badge>
                </div>
                <p className="text-gray-700 mb-3">
                  Based on sentiment trends and workload mentions, there's a 78% probability of increased
                  turnover in Engineering within the next 30 days if current patterns continue.
                </p>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recommended Actions:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Schedule team capacity review this week</li>
                    <li>• Consider sprint scope reduction for next 2 cycles</li>
                    <li>• Plan team off-site or morale-building activity</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-green-500">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-gray-900">New Benefits Program Driving Satisfaction</h3>
                  <Badge variant="success">Positive Trend</Badge>
                </div>
                <p className="text-gray-700 mb-3">
                  The recently launched learning budget and flexible hours are showing strong positive impact
                  across all departments. Expected to improve retention by 12-15% over next quarter.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Next Steps:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Continue monitoring adoption rates</li>
                    <li>• Share success stories in next all-hands</li>
                    <li>• Consider expanding budget based on Q4 results</li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </motion.div>
    </div>
  );
}
