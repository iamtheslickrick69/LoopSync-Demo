import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertCircle, MessageSquare, Trash2 } from 'lucide-react';
import { Badge } from '../../shared/Badge';
import { GlassCard } from '../../shared/GlassCard';

type FeedbackStatus = 'submitted' | 'acknowledged' | 'in-progress' | 'resolved';
type FilterType = 'all' | 'pending' | 'acknowledged' | 'resolved';

interface FeedbackItem {
  id: string;
  content: string;
  status: FeedbackStatus;
  timestamp: Date;
  category: string;
  response?: string;
}

// Mock data
const mockFeedback: FeedbackItem[] = [
  {
    id: '1',
    content: 'The new project management tool is causing confusion across teams. Need better training.',
    status: 'resolved',
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    category: 'Suggestion',
    response: 'Thank you for the feedback! We\'ve scheduled a training session for next week.',
  },
  {
    id: '2',
    content: 'Work-life balance has been challenging with the new deadline expectations.',
    status: 'in-progress',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    category: 'Concern',
    response: 'We\'re reviewing workload distribution and will follow up soon.',
  },
  {
    id: '3',
    content: 'Great collaboration on the recent launch! Team morale is high.',
    status: 'acknowledged',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    category: 'Celebration',
  },
];

export function MyFeedback() {
  const [filter, setFilter] = useState<FilterType>('all');

  const getStatusConfig = (status: FeedbackStatus) => {
    switch (status) {
      case 'submitted':
        return { label: 'Submitted', color: 'bg-blue-500', icon: <Clock className="w-4 h-4" /> };
      case 'acknowledged':
        return { label: 'Acknowledged', color: 'bg-yellow-500', icon: <MessageSquare className="w-4 h-4" /> };
      case 'in-progress':
        return { label: 'In Progress', color: 'bg-orange-500', icon: <AlertCircle className="w-4 h-4" /> };
      case 'resolved':
        return { label: 'Resolved', color: 'bg-green-500', icon: <CheckCircle className="w-4 h-4" /> };
    }
  };

  const filteredFeedback = mockFeedback.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'pending') return item.status === 'submitted';
    if (filter === 'acknowledged') return item.status === 'acknowledged' || item.status === 'in-progress';
    if (filter === 'resolved') return item.status === 'resolved';
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Feedback</h1>
        <p className="text-gray-600">Track your submissions and responses from leadership</p>
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-4 mb-6"
      >
        <div className="flex gap-2">
          {(['all', 'pending', 'acknowledged', 'resolved'] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === f
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white/50 text-gray-700 hover:bg-white/80'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Feedback List */}
      <div className="space-y-4">
        {filteredFeedback.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-12 text-center">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No feedback yet</h3>
              <p className="text-gray-600">Start by sharing your thoughts on the Home page</p>
            </GlassCard>
          </motion.div>
        ) : (
          filteredFeedback.map((item, index) => {
            const statusConfig = getStatusConfig(item.status);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <GlassCard className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${statusConfig.color} p-2 rounded-lg text-white`}>
                        {statusConfig.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{statusConfig.label}</span>
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <span className="text-sm text-gray-500">
                          {item.timestamp.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    {item.status === 'submitted' && (
                      <button className="text-red-500 hover:text-red-700 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{item.content}</p>

                  {item.response && (
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <div className="flex items-start gap-2">
                        <MessageSquare className="w-5 h-5 text-primary-500 mt-1" />
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-1">
                            Response from Leadership
                          </div>
                          <p className="text-sm text-gray-600">{item.response}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
