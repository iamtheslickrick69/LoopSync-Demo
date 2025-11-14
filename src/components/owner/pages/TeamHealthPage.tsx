import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { GlassCard } from '../../shared/GlassCard';
import { Badge } from '../../shared/Badge';

interface Department {
  id: string;
  name: string;
  healthScore: number;
  trend: 'up' | 'down' | 'stable';
  feedbackCount: number;
  responseRate: number;
  avgResolutionTime: number;
  topConcerns: string[];
  sentimentBreakdown: {
    positive: number;
    neutral: number;
    negative: number;
  };
}

export function TeamHealthPage() {
  const [selectedDept, setSelectedDept] = useState<string>('engineering');

  const departments: Department[] = [
    {
      id: 'engineering',
      name: 'Engineering',
      healthScore: 72,
      trend: 'down',
      feedbackCount: 89,
      responseRate: 92,
      avgResolutionTime: 2.4,
      topConcerns: ['Work-Life Balance', 'Technical Debt', 'Sprint Planning'],
      sentimentBreakdown: { positive: 45, neutral: 35, negative: 20 },
    },
    {
      id: 'sales',
      name: 'Sales',
      healthScore: 81,
      trend: 'up',
      feedbackCount: 64,
      responseRate: 95,
      avgResolutionTime: 1.8,
      topConcerns: ['Territory Changes', 'Commission Structure', 'CRM Tools'],
      sentimentBreakdown: { positive: 60, neutral: 30, negative: 10 },
    },
    {
      id: 'marketing',
      name: 'Marketing',
      healthScore: 85,
      trend: 'stable',
      feedbackCount: 42,
      responseRate: 98,
      avgResolutionTime: 1.5,
      topConcerns: ['Creative Autonomy', 'Campaign Timelines', 'Budget Allocation'],
      sentimentBreakdown: { positive: 70, neutral: 20, negative: 10 },
    },
    {
      id: 'operations',
      name: 'Operations',
      healthScore: 78,
      trend: 'up',
      feedbackCount: 52,
      responseRate: 94,
      avgResolutionTime: 2.1,
      topConcerns: ['Process Documentation', 'Cross-Team Coordination', 'Tool Integration'],
      sentimentBreakdown: { positive: 55, neutral: 30, negative: 15 },
    },
  ];

  const currentDept = departments.find((d) => d.id === selectedDept)!;

  const cultureCategoryData = [
    { category: 'Remote/Hybrid Friction', percentage: 12, count: 12 },
    { category: 'Communication', percentage: 18, count: 18 },
    { category: 'Workload Stress', percentage: 8, count: 8 },
    { category: 'Recognition', percentage: 15, count: 15 },
    { category: 'Career Growth', percentage: 22, count: 22 },
    { category: 'Team Collaboration', percentage: 25, count: 25 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <Users className="w-10 h-10 text-primary-500" />
          Team Health
        </h1>
        <p className="text-gray-600">Department-by-department culture insights</p>
      </motion.div>

      {/* Department Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex gap-2">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => setSelectedDept(dept.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedDept === dept.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'glass text-gray-700 hover:bg-white/90'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Department Overview */}
      <motion.div
        key={selectedDept}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
      >
        {/* Health Score */}
        <GlassCard className="p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Health Score</div>
          <div className={`text-4xl font-bold mb-2 ${currentDept.healthScore >= 80 ? 'text-green-600' : currentDept.healthScore >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
            {currentDept.healthScore}%
          </div>
          <div className={`flex items-center justify-center gap-1 text-sm ${currentDept.trend === 'up' ? 'text-green-600' : currentDept.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
            <TrendingUp className={`w-4 h-4 ${currentDept.trend === 'down' ? 'rotate-180' : currentDept.trend === 'stable' ? 'rotate-0' : ''}`} />
            <span className="font-semibold capitalize">{currentDept.trend}</span>
          </div>
        </GlassCard>

        {/* Feedback Count */}
        <GlassCard className="p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Feedback Items</div>
          <div className="text-4xl font-bold text-primary-600 mb-2">{currentDept.feedbackCount}</div>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
            <MessageSquare className="w-4 h-4" />
            <span>Last 30 days</span>
          </div>
        </GlassCard>

        {/* Response Rate */}
        <GlassCard className="p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Response Rate</div>
          <div className="text-4xl font-bold text-green-600 mb-2">{currentDept.responseRate}%</div>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4" />
            <span>High engagement</span>
          </div>
        </GlassCard>

        {/* Avg Resolution */}
        <GlassCard className="p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Avg Resolution</div>
          <div className="text-4xl font-bold text-blue-600 mb-2">{currentDept.avgResolutionTime}</div>
          <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>days</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* Sentiment Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <GlassCard className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Sentiment Breakdown</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Positive</span>
                <span className="text-sm font-bold text-green-600">{currentDept.sentimentBreakdown.positive}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${currentDept.sentimentBreakdown.positive}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Neutral</span>
                <span className="text-sm font-bold text-gray-600">{currentDept.sentimentBreakdown.neutral}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-400 rounded-full"
                  style={{ width: `${currentDept.sentimentBreakdown.neutral}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Negative</span>
                <span className="text-sm font-bold text-red-600">{currentDept.sentimentBreakdown.negative}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${currentDept.sentimentBreakdown.negative}%` }}
                />
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Top Concerns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <GlassCard className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Top Concerns</h3>
          <div className="flex flex-wrap gap-3">
            {currentDept.topConcerns.map((concern) => (
              <Badge key={concern} variant="secondary" className="text-base px-4 py-2">
                {concern}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Culture Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Culture Breakdown</h3>
          <div className="space-y-4">
            {cultureCategoryData.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{item.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">{item.count} mentions</span>
                    <span className="font-bold text-primary-600">{item.percentage}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
