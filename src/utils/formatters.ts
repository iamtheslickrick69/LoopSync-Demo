import { formatDistanceToNow, format } from 'date-fns';

export function formatRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

export function formatDate(date: Date, formatStr = 'MMM d, yyyy'): string {
  return format(date, formatStr);
}

export function formatDateTime(date: Date): string {
  return format(date, 'MMM d, yyyy h:mm a');
}

export function formatPercentage(value: number, decimals = 0): string {
  return `${value.toFixed(decimals)}%`;
}

export function getSentimentColor(sentiment: number): string {
  if (sentiment >= 0.5) return 'text-green-600';
  if (sentiment >= 0) return 'text-yellow-600';
  return 'text-red-600';
}

export function getSentimentLabel(sentiment: number): string {
  if (sentiment >= 0.7) return 'Very Positive';
  if (sentiment >= 0.3) return 'Positive';
  if (sentiment >= -0.3) return 'Neutral';
  if (sentiment >= -0.7) return 'Negative';
  return 'Very Negative';
}

export function getUrgencyColor(urgency: string): string {
  switch (urgency) {
    case 'critical':
      return 'bg-red-500';
    case 'priority':
      return 'bg-yellow-500';
    default:
      return 'bg-green-500';
  }
}

export function getUrgencyIcon(urgency: string): string {
  switch (urgency) {
    case 'critical':
      return '🔴';
    case 'priority':
      return '🟡';
    default:
      return '🟢';
  }
}
