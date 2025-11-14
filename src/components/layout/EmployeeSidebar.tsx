import { motion } from 'framer-motion';
import { Home, FileText, BarChart3, HelpCircle } from 'lucide-react';
import { useNavigationStore, EmployeePage } from '../../store/navigationStore';

interface NavItem {
  id: EmployeePage;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
  { id: 'my-feedback', label: 'My Feedback', icon: <FileText className="w-5 h-5" /> },
  { id: 'team-pulse', label: 'Team Pulse', icon: <BarChart3 className="w-5 h-5" /> },
  { id: 'help', label: 'Help & Resources', icon: <HelpCircle className="w-5 h-5" /> },
];

export function EmployeeSidebar() {
  const { employeePage, setEmployeePage } = useNavigationStore();

  return (
    <aside className="fixed left-0 top-[73px] h-[calc(100vh-73px)] w-64 bg-white/50 backdrop-blur-xl border-r border-gray-200/50 z-40">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setEmployeePage(item.id)}
            className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
              employeePage === item.id
                ? 'text-white'
                : 'text-gray-700 hover:bg-gray-100/80'
            }`}
          >
            {employeePage === item.id && (
              <motion.div
                layoutId="activeEmployeePage"
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item.icon}</span>
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Trust Signals */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
        <div className="glass rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-gray-700">Fully Anonymous</span>
          </div>
          <p className="text-xs text-gray-600">Your feedback is completely private and secure.</p>
        </div>
      </div>
    </aside>
  );
}
