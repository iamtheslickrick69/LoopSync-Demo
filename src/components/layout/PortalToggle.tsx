import { motion } from 'framer-motion';
import { usePortalStore } from '../../store/portalStore';
import { Users, Briefcase } from 'lucide-react';

export function PortalToggle() {
  const { currentPortal, togglePortal, isTransitioning } = usePortalStore();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="glass rounded-full p-1 flex items-center gap-1">
        <button
          onClick={togglePortal}
          disabled={isTransitioning}
          className={`relative px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
            currentPortal === 'employee'
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {currentPortal === 'employee' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Users className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Employee</span>
        </button>

        <button
          onClick={togglePortal}
          disabled={isTransitioning}
          className={`relative px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
            currentPortal === 'owner'
              ? 'text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {currentPortal === 'owner' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <Briefcase className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Owner</span>
        </button>
      </div>
    </div>
  );
}
