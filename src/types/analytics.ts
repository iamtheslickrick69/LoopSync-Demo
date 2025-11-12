export interface CultureHealthMetrics {
  score: number; // 0-100
  trend: number; // Percentage change
  lastUpdated: Date;
}

export interface SentimentDataPoint {
  date: string;
  overall: number;
  engineering: number;
  sales: number;
  marketing: number;
  operations: number;
}

export interface DepartmentMetrics {
  department: string;
  participationRate: number;
  averageSentiment: number;
  responseTime: number; // in hours
  feedbackCount: number;
}

export interface RiskIndicator {
  category: string;
  level: 'low' | 'medium' | 'high';
  metric: number;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface AIInsight {
  type: 'critical' | 'trending-up' | 'trending-down' | 'hidden' | 'action-required';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  relatedFeedbackIds: string[];
}

export interface TeamAnalytics {
  departments: DepartmentMetrics[];
  overallParticipation: number;
  totalFeedback: number;
  averageResponseTime: number;
}
