import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, Briefcase, User } from 'lucide-react';
import { usePortalStore } from '../../store/portalStore';
import { SettingsModal } from './SettingsModal';

export function TopNav() {
  const { currentPortal, togglePortal, isTransitioning } = usePortalStore();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0">
        <div className="max-w-[1920px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.location.reload()}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">LoopSync</h1>
                <p className="text-xs text-gray-600">Powered by Coro AI</p>
              </div>
            </button>

            {/* Center - Role Toggle */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="glass rounded-full p-1 flex items-center gap-1 shadow-lg">
                <button
                  onClick={togglePortal}
                  disabled={isTransitioning}
                  className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    currentPortal === 'employee'
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {currentPortal === 'employee' && (
                    <motion.div
                      layoutId="activePortal"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Users className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Employee</span>
                </button>

                <button
                  onClick={togglePortal}
                  disabled={isTransitioning}
                  className={`relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    currentPortal === 'owner'
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {currentPortal === 'owner' && (
                    <motion.div
                      layoutId="activePortal"
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Briefcase className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Owner</span>
                </button>
              </div>
            </div>

            {/* Right - Settings & User */}
            <div className="flex items-center gap-3">
              {/* User Role Indicator */}
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {currentPortal}
                </span>
              </div>

              {/* Settings */}
              <button
                onClick={() => setShowSettings(true)}
                className="glass p-3 rounded-full hover:bg-white/90 transition-all duration-200 group"
                aria-label="Settings"
              >
                <Settings className="w-5 h-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
}
