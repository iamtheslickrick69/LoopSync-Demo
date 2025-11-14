import { motion } from 'framer-motion';
import { TrendingUp, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { GlassCard } from '../../shared/GlassCard';
import { Badge } from '../../shared/Badge';

export function TeamPulse() {
  const topThemes = [
    { label: 'Work-Life Balance', count: 24, trend: 'up' },
    { label: 'Team Collaboration', count: 18, trend: 'stable' },
    { label: 'Professional Growth', count: 15, trend: 'up' },
    { label: 'Communication', count: 12, trend: 'down' },
    { label: 'Recognition', count: 10, trend: 'up' },
  ];

  const recentImprovements = [
    {
      title: 'Extended Flexible Hours',
      description: 'Based on your feedback, we\'ve expanded flexible working hours to 6am-10pm',
      date: '2 days ago',
    },
    {
      title: 'New Learning Budget',
      description: 'Each team member now has $2,000 annual learning & development budget',
      date: '1 week ago',
    },
    {
      title: 'Improved Onboarding',
      description: 'New hire onboarding extended to 2 weeks with dedicated mentorship',
      date: '2 weeks ago',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Team Pulse</h1>
        <p className="text-gray-600">See how your collective voice is shaping our culture</p>
      </motion.div>

      {/* Culture Health Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard className="p-8 mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-primary-500" />
            <h2 className="text-2xl font-bold text-gray-900">Culture Health Score</h2>
          </div>
          <div className="text-7xl font-bold text-gradient mb-2">78%</div>
          <div className="flex items-center justify-center gap-2 text-green-600">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">+5% from last month</span>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Your collective feedback shows strong team morale with opportunities for growth in work-life balance
          </p>
        </GlassCard>
      </motion.div>

      {/* Top Themes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-primary-500" />
          Top Themes This Month
        </h2>
        <GlassCard className="p-6">
          <div className="space-y-4">
            {topThemes.map((theme, index) => (
              <div key={theme.label} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-gray-300">{index + 1}</span>
                  <span className="font-medium text-gray-900">{theme.label}</span>
                  <Badge variant="secondary">{theme.count} mentions</Badge>
                </div>
                <div>
                  {theme.trend === 'up' && (
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  )}
                  {theme.trend === 'stable' && (
                    <div className="w-5 h-5 flex items-center">
                      <div className="w-full h-0.5 bg-gray-400" />
                    </div>
                  )}
                  {theme.trend === 'down' && (
                    <TrendingUp className="w-5 h-5 text-red-500 rotate-180" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Recent Improvements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary-500" />
          Recent Improvements Made
        </h2>
        <div className="space-y-4">
          {recentImprovements.map((improvement, index) => (
            <motion.div
              key={improvement.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <GlassCard className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{improvement.title}</h3>
                  <Badge variant="success">{improvement.date}</Badge>
                </div>
                <p className="text-gray-600">{improvement.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contribution Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-8"
      >
        <GlassCard className="p-6 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary-600" />
            <p className="text-gray-700">
              <strong>Your voice matters!</strong> The insights above are shaped by feedback from team members like you.
              Keep sharing your thoughts to help us build a better workplace together.
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
