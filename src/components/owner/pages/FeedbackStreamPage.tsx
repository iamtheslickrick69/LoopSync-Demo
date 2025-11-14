import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, CheckCircle, Flag } from 'lucide-react';
import { GlassCard } from '../../shared/GlassCard';
import { FeedbackStream } from '../FeedbackStream';

export function FeedbackStreamPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    status: [] as string[],
    department: [] as string[],
    severity: [] as string[],
  });
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = {
    status: ['New', 'Acknowledged', 'In Progress', 'Resolved'],
    department: ['Engineering', 'Sales', 'Marketing', 'Operations'],
    severity: ['Critical', 'High', 'Medium', 'Low'],
  };

  const toggleFilter = (category: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Feedback Stream</h1>
        <p className="text-gray-600">Review and respond to employee feedback</p>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT SIDEBAR - Filters */}
        <div className="col-span-12 lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard className="p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-primary-500" />
                <h3 className="font-bold text-gray-900">Filters</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search feedback..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Status Filters */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Status</h4>
                <div className="space-y-2">
                  {filterOptions.status.map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.status.includes(status)}
                        onChange={() => toggleFilter('status', status)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{status}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Department Filters */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Department</h4>
                <div className="space-y-2">
                  {filterOptions.department.map((dept) => (
                    <label key={dept} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.department.includes(dept)}
                        onChange={() => toggleFilter('department', dept)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{dept}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Severity Filters */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Severity</h4>
                <div className="space-y-2">
                  {filterOptions.severity.map((severity) => (
                    <label key={severity} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.severity.includes(severity)}
                        onChange={() => toggleFilter('severity', severity)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{severity}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedFilters.status.length > 0 ||
                selectedFilters.department.length > 0 ||
                selectedFilters.severity.length > 0) && (
                <button
                  onClick={() =>
                    setSelectedFilters({ status: [], department: [], severity: [] })
                  }
                  className="w-full mt-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </GlassCard>
          </motion.div>
        </div>

        {/* RIGHT - Feedback Feed */}
        <div className="col-span-12 lg:col-span-9">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Bulk Actions Bar */}
            <div className="glass rounded-xl p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">247 total items</span>
                <div className="w-px h-4 bg-gray-300" />
                <span className="text-sm font-semibold text-primary-600">12 new</span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Acknowledge Selected</span>
                </button>
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Flag className="w-4 h-4" />
                  <span className="text-sm font-medium">Mark Resolved</span>
                </button>
              </div>
            </div>

            {/* Feedback Stream Component */}
            <FeedbackStream />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
