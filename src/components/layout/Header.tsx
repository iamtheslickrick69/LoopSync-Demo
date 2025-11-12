import { useState } from 'react';
import { Settings } from 'lucide-react';
import { SettingsModal } from './SettingsModal';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className="relative z-10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">LoopSync</h1>
              <p className="text-xs text-gray-600">Trust Infrastructure Platform</p>
            </div>
          </div>

          <button
            onClick={() => setShowSettings(true)}
            className="glass p-3 rounded-full hover:bg-white/90 transition-all duration-200 group"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </header>

      <SettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
}
