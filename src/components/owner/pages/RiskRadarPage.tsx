import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, UserMinus, Scale, Wrench, Users, TrendingUp, TrendingDown, ChevronDown, ChevronUp } from 'lucide-react';
import { GlassCard } from '../../shared/GlassCard';
import { Badge } from '../../shared/Badge';

interface RiskAlert {
  id: string;
  type: 'retention' | 'legal' | 'project' | 'culture';
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  department: string;
  feedbackCount: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  recommendations: string[];
}

export function RiskRadarPage() {
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null);

  const riskAlerts: RiskAlert[] = [
    {
      id: '1',
      type: 'retention',
      severity: 'critical',
      title: 'High Retention Risk in Engineering',
      description: 'Multiple senior engineers expressing burnout and considering leaving. Mentions of unsustainable workload and lack of work-life balance.',
      department: 'Engineering',
      feedbackCount: 8,
      trend: 'increasing',
      recommendations: [
        'Schedule 1-on-1s with affected team members',
        'Review sprint capacity and deadlines',
        'Consider hiring additional resources',
        'Implement mandatory no-meeting days',
      ],
    },
    {
      id: '2',
      type: 'legal',
      severity: 'high',
      title: 'Potential Harassment Concern',
      description: 'Anonymous reports of inappropriate behavior from a team lead. Requires immediate investigation per company policy.',
      department: 'Sales',
      feedbackCount: 3,
      trend: 'stable',
      recommendations: [
        'Escalate to HR immediately',
        'Launch confidential investigation',
        'Ensure psychological safety for reporters',
        'Review team dynamics and culture',
      ],
    },
    {
      id: '3',
      type: 'project',
      severity: 'medium',
      title: 'Q4 Delivery at Risk',
      description: 'Team reporting technical debt, unclear requirements, and scope creep affecting Q4 roadmap commitments.',
      department: 'Engineering',
      feedbackCount: 12,
      trend: 'increasing',
      recommendations: [
        'Conduct roadmap review meeting',
        'Prioritize technical debt reduction',
        'Clarify project requirements with stakeholders',
        'Consider timeline adjustments',
      ],
    },
    {
      id: '4',
      type: 'culture',
      severity: 'medium',
      title: 'Communication Breakdown in Marketing',
      description: 'Team members reporting feeling out of the loop on strategic decisions and unclear priorities.',
      department: 'Marketing',
      feedbackCount: 6,
      trend: 'stable',
      recommendations: [
        'Increase transparency in decision-making',
        'Hold regular all-hands for Marketing',
        'Improve documentation of strategic priorities',
        'Create feedback loop for communication effectiveness',
      ],
    },
  ];

  const getRiskIcon = (type: RiskAlert['type']) => {
    switch (type) {
      case 'retention':
        return <UserMinus className="w-6 h-6" />;
      case 'legal':
        return <Scale className="w-6 h-6" />;
      case 'project':
        return <Wrench className="w-6 h-6" />;
      case 'culture':
        return <Users className="w-6 h-6" />;
    }
  };

  const getSeverityColor = (severity: RiskAlert['severity']) => {
    switch (severity) {
      case 'critical':
        return 'border-red-500 bg-red-50';
      case 'high':
        return 'border-orange-500 bg-orange-50';
      case 'medium':
        return 'border-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-green-500 bg-green-50';
    }
  };

  const severityCounts = {
    critical: riskAlerts.filter((r) => r.severity === 'critical').length,
    high: riskAlerts.filter((r) => r.severity === 'high').length,
    medium: riskAlerts.filter((r) => r.severity === 'medium').length,
    low: riskAlerts.filter((r) => r.severity === 'low').length,
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
          <AlertTriangle className="w-10 h-10 text-red-500" />
          Risk Radar
        </h1>
        <p className="text-gray-600">Critical issues requiring immediate attention</p>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: 'Critical', count: severityCounts.critical, color: 'bg-red-500', glow: 'shadow-red-500/50' },
          { label: 'High', count: severityCounts.high, color: 'bg-orange-500', glow: 'shadow-orange-500/50' },
          { label: 'Medium', count: severityCounts.medium, color: 'bg-yellow-500', glow: 'shadow-yellow-500/50' },
          { label: 'Low', count: severityCounts.low, color: 'bg-green-500', glow: 'shadow-green-500/50' },
        ].map((item) => (
          <GlassCard key={item.label} className="p-6 text-center">
            <div className={`w-3 h-3 ${item.color} rounded-full mx-auto mb-3 shadow-lg ${item.glow} animate-pulse`} />
            <div className="text-3xl font-bold text-gray-900 mb-1">{item.count}</div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </GlassCard>
        ))}
      </motion.div>

      {/* Risk Alerts */}
      <div className="space-y-4">
        {riskAlerts.map((risk, index) => {
          const isExpanded = expandedRisk === risk.id;

          return (
            <motion.div
              key={risk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <GlassCard className={`border-l-4 ${getSeverityColor(risk.severity)}`}>
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 rounded-lg ${risk.severity === 'critical' || risk.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                        {getRiskIcon(risk.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-900 text-lg">{risk.title}</h3>
                          <Badge
                            variant={
                              risk.severity === 'critical' || risk.severity === 'high'
                                ? 'danger'
                                : 'warning'
                            }
                          >
                            {risk.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{risk.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <Badge variant="secondary">{risk.department}</Badge>
                          <span className="text-gray-600">{risk.feedbackCount} related feedback items</span>
                          <div className={`flex items-center gap-1 ${risk.trend === 'increasing' ? 'text-red-600' : risk.trend === 'decreasing' ? 'text-green-600' : 'text-gray-600'}`}>
                            {risk.trend === 'increasing' && <TrendingUp className="w-4 h-4" />}
                            {risk.trend === 'decreasing' && <TrendingDown className="w-4 h-4" />}
                            <span className="font-semibold capitalize">{risk.trend}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedRisk(isExpanded ? null : risk.id)}
                      className="ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 pt-4 mt-4"
                    >
                      <h4 className="font-semibold text-gray-900 mb-3">Recommended Actions:</h4>
                      <ul className="space-y-2 mb-4">
                        {risk.recommendations.map((rec, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                          View Related Feedback
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Mark Reviewed
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Create Task
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* No Risks State */}
      {riskAlerts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Great news!</h3>
            <p className="text-gray-600">No critical risks detected. Your team culture is healthy.</p>
          </GlassCard>
        </motion.div>
      )}
    </div>
  );
}
