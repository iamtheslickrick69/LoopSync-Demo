import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { GlassCard } from '../shared/GlassCard';
import { sentimentTimeline } from '../../utils/mockData';

export function SentimentChart() {
  return (
    <GlassCard delay={0.3} className="col-span-2">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Sentiment Timeline
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sentimentTimeline}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            stroke="#6b7280"
            fontSize={12}
            tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          />
          <YAxis
            stroke="#6b7280"
            fontSize={12}
            domain={[-1, 1]}
            ticks={[-1, -0.5, 0, 0.5, 1]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            formatter={(value: number) => [value.toFixed(2), '']}
            labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="overall"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: '#3b82f6', r: 4 }}
            activeDot={{ r: 6 }}
            name="Overall"
          />
          <Line
            type="monotone"
            dataKey="engineering"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ fill: '#8b5cf6', r: 3 }}
            name="Engineering"
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 3 }}
            name="Sales"
          />
          <Line
            type="monotone"
            dataKey="marketing"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ fill: '#f59e0b', r: 3 }}
            name="Marketing"
          />
          <Line
            type="monotone"
            dataKey="operations"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: '#ef4444', r: 3 }}
            name="Operations"
          />
        </LineChart>
      </ResponsiveContainer>
    </GlassCard>
  );
}
