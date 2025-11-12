import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlassCard } from '../shared/GlassCard';
import { Badge } from '../shared/Badge';
import { Input } from '../shared/Input';
import { useFeedbackStore } from '../../store/feedbackStore';
import { formatRelativeTime, getUrgencyIcon } from '../../utils/formatters';
import { UrgencyLevel } from '../../types/feedback';

export function FeedbackStream() {
  const { getFilteredFeedback, setFilters, filters } = useFeedbackStore();
  const [showFilters, setShowFilters] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const feedback = getFilteredFeedback().slice(0, 10); // Show recent 10

  const getPrivacyColor = (level: string) => {
    switch (level) {
      case 'anonymous':
        return 'default' as const;
      case 'group':
        return 'info' as const;
      case 'department':
        return 'warning' as const;
      case 'identified':
        return 'success' as const;
      default:
        return 'default' as const;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread':
        return 'default' as const;
      case 'acknowledged':
        return 'info' as const;
      case 'in-progress':
        return 'warning' as const;
      case 'resolved':
        return 'success' as const;
      default:
        return 'default' as const;
    }
  };

  const handleUrgencyFilter = (urgency: UrgencyLevel) => {
    const current = filters.urgency || [];
    if (current.includes(urgency)) {
      setFilters({ urgency: current.filter((u) => u !== urgency) });
    } else {
      setFilters({ urgency: [...current, urgency] });
    }
  };

  return (
    <GlassCard delay={0.4} className="col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Feedback Stream</h3>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="glass px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-white/90 transition-all flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mb-4 glass-subtle rounded-lg p-4"
        >
          <div className="flex items-center gap-4 mb-3">
            <span className="text-sm font-medium text-gray-700">Urgency:</span>
            <div className="flex gap-2">
              {(['critical', 'priority', 'general'] as UrgencyLevel[]).map((urgency) => (
                <button
                  key={urgency}
                  onClick={() => handleUrgencyFilter(urgency)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    filters.urgency?.includes(urgency)
                      ? 'bg-primary-500 text-white'
                      : 'glass text-gray-700 hover:bg-white/90'
                  }`}
                >
                  {getUrgencyIcon(urgency)} {urgency}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Search className="w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search feedback..."
              onChange={(e) => setFilters({ searchQuery: e.target.value })}
              className="flex-1"
            />
          </div>
        </motion.div>
      )}

      {/* Feedback List */}
      <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-subtle rounded-xl p-4 hover:bg-white/70 transition-all cursor-pointer"
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getUrgencyIcon(item.urgency)}</span>
                <Badge variant={getPrivacyColor(item.privacyLevel)} size="sm">
                  {item.privacyLevel}
                </Badge>
                <Badge variant={getStatusColor(item.status)} size="sm">
                  {item.status}
                </Badge>
                {item.department && (
                  <span className="text-xs text-gray-600">
                    {item.department}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-500">
                {formatRelativeTime(item.timestamp)}
              </span>
            </div>

            {/* Content */}
            <p className={`text-sm text-gray-700 ${expandedId === item.id ? '' : 'line-clamp-2'}`}>
              {item.content}
            </p>

            {/* Tags */}
            {item.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full"
                  >
                    {tag.type === 'person' && '@'}
                    {tag.type === 'project' && '#'}
                    {tag.value}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
