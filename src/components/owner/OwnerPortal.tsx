import { motion } from 'framer-motion';
import { OwnerSidebar } from '../layout/OwnerSidebar';
import { useNavigationStore } from '../../store/navigationStore';
import { OwnerDashboard } from './pages/OwnerDashboard';
import { FeedbackStreamPage } from './pages/FeedbackStreamPage';
import { RiskRadarPage } from './pages/RiskRadarPage';
import { AIInsightsPage } from './pages/AIInsightsPage';
import { TeamHealthPage } from './pages/TeamHealthPage';
import { SettingsPage } from './pages/SettingsPage';

export function OwnerPortal() {
  const { ownerPage } = useNavigationStore();

  const renderPage = () => {
    switch (ownerPage) {
      case 'dashboard':
        return <OwnerDashboard />;
      case 'feedback-stream':
        return <FeedbackStreamPage />;
      case 'risk-radar':
        return <RiskRadarPage />;
      case 'ai-insights':
        return <AIInsightsPage />;
      case 'team-health':
        return <TeamHealthPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <OwnerDashboard />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      <OwnerSidebar />
      <div className="ml-64 relative z-10">
        {renderPage()}
      </div>
    </motion.div>
  );
}
