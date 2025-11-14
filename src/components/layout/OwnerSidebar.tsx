import { motion } from 'framer-motion';
import { LayoutDashboard, MessageSquare, AlertTriangle, Sparkles, Users, Settings } from 'lucide-react';
import { useNavigationStore, OwnerPage } from '../../store/navigationStore';

interface NavItem {
  id: OwnerPage;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'feedback-stream', label: 'Feedback Stream', icon: <MessageSquare className="w-5 h-5" /> },
  { id: 'risk-radar', label: 'Risk Radar', icon: <AlertTriangle className="w-5 h-5" /> },
  { id: 'ai-insights', label: 'AI Insights', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'team-health', label: 'Team Health', icon: <Users className="w-5 h-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
];

export function OwnerSidebar() {
  const { ownerPage, setOwnerPage } = useNavigationStore();

  return (
    <aside className="fixed left-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-white/50 backdrop-blur-xl border-r border-gray-200/50 z-40">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setOwnerPage(item.id)}
            className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              ownerPage === item.id
                ? 'text-white'
                : 'text-gray-700 hover:bg-gray-100/80'
            }`}
          >
            {ownerPage === item.id && (
              <motion.div
                layoutId="activeOwnerPage"
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.icon}</span>
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
        <div className="glass rounded-xl p-4">
          <div className="text-xs font-semibold text-gray-600 mb-3">Quick Stats</div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">New Feedback</span>
              <span className="font-bold text-primary-600">12</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Critical Alerts</span>
              <span className="font-bold text-red-600">3</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-600">Health Score</span>
              <span className="font-bold text-green-600">78%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
