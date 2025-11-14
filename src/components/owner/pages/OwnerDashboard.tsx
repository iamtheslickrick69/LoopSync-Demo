import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Download, Filter } from 'lucide-react';
import { CultureHealthCard } from '../CultureHealthCard';
import { SentimentChart } from '../SentimentChart';
import { GlassCard } from '../../shared/GlassCard';
import { Badge } from '../../shared/Badge';

export function OwnerDashboard() {
  const keyMetrics = [
    { label: 'Total Feedback', value: '247', change: '+23%', trend: 'up' },
    { label: 'Response Rate', value: '94%', change: '+5%', trend: 'up' },
    { label: 'Avg Resolution Time', value: '2.3 days', change: '-0.8 days', trend: 'up' },
  ];

  const aiInsights = [
    {
      title: 'Engineering Morale Declining',
      severity: 'high',
      description: 'Multiple mentions of burnout and deadline pressure in Engineering dept.',
      count: 8,
    },
    {
      title: 'Positive Feedback on New Benefits',
      severity: 'low',
      description: 'Team responding well to expanded learning budget and flexible hours.',
      count: 15,
    },
    {
      title: 'Communication Gap in Sales',
      severity: 'medium',
      description: 'Sales team reporting unclear expectations from leadership.',
      count: 5,
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Your team's culture health at a glance</p>
        </div>
        <div className="flex gap-3">
          <button className="glass px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/90 transition-all">
            <Filter className="w-4 h-4" />
            <span className="font-medium">Last 30 Days</span>
          </button>
          <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow">
            <Download className="w-4 h-4" />
            <span className="font-medium">Export Report</span>
          </button>
        </div>
      </motion.div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN - Culture Health & Metrics */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Culture Health Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <CultureHealthCard />
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Key Metrics</h3>
              <div className="space-y-4">
                {keyMetrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    </div>
                    <div className={`flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm font-semibold">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* MIDDLE COLUMN - Sentiment Chart */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {/* Sentiment Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SentimentChart />
          </motion.div>

          {/* Department Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Department Health</h3>
              <div className="space-y-3">
                {[
                  { name: 'Engineering', health: 72, feedback: 89 },
                  { name: 'Sales', health: 81, feedback: 64 },
                  { name: 'Marketing', health: 85, feedback: 42 },
                  { name: 'Operations', health: 78, feedback: 52 },
                ].map((dept) => (
                  <div key={dept.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-900">{dept.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600">{dept.feedback} feedback items</span>
                        <span className={`font-bold ${dept.health >= 80 ? 'text-green-600' : dept.health >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {dept.health}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${dept.health >= 80 ? 'bg-green-500' : dept.health >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${dept.health}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* BOTTOM - AI Insights */}
        <div className="col-span-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900 text-xl">Top AI Insights</h3>
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  View All Insights →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {aiInsights.map((insight) => (
                  <div
                    key={insight.title}
                    className={`p-4 rounded-xl border-2 ${
                      insight.severity === 'high'
                        ? 'border-red-200 bg-red-50'
                        : insight.severity === 'medium'
                        ? 'border-yellow-200 bg-yellow-50'
                        : 'border-green-200 bg-green-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        variant={
                          insight.severity === 'high'
                            ? 'danger'
                            : insight.severity === 'medium'
                            ? 'warning'
                            : 'success'
                        }
                      >
                        {insight.severity.toUpperCase()}
                      </Badge>
                      <span className="text-sm font-bold text-gray-600">{insight.count} mentions</span>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{insight.title}</h4>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
