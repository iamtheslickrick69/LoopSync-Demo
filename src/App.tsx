import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePortalStore, useSettingsStore } from './store/portalStore';
import { TopNav } from './components/layout/TopNav';
import { Background3D } from './components/layout/Background3D';
import { EmployeePortal } from './components/employee/EmployeePortal';
import { OwnerPortal } from './components/owner/OwnerPortal';
import { LandingPage } from './components/LandingPage';
import { seedDemoData, hasFeedbackData } from './services/demoData';
import { claudeService } from './services/claudeAPI';

function App() {
  const { currentPortal, showLandingPage } = usePortalStore();
  const { claudeApiKey } = useSettingsStore();

  useEffect(() => {
    // Initialize Claude API if key exists
    if (claudeApiKey) {
      claudeService.initialize(claudeApiKey);
      console.log('Claude API initialized');
    }

    // Seed demo data if no feedback exists
    if (!hasFeedbackData()) {
      console.log('No feedback data found, seeding demo data...');
      seedDemoData();
    }
  }, [claudeApiKey]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <AnimatePresence mode="wait">
        {showLandingPage ? (
          <LandingPage key="landing" />
        ) : (
          <>
            {/* 3D Background Elements */}
            <Background3D />

            {/* Top Navigation */}
            <TopNav />

            {/* Portal Content */}
            <main className="relative">
              <AnimatePresence mode="wait">
                {currentPortal === 'employee' ? (
                  <EmployeePortal key="employee" />
                ) : (
                  <OwnerPortal key="owner" />
                )}
              </AnimatePresence>
            </main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
