import { AnimatePresence } from 'framer-motion';
import { usePortalStore } from './store/portalStore';
import { Header } from './components/layout/Header';
import { PortalToggle } from './components/layout/PortalToggle';
import { Background3D } from './components/layout/Background3D';
import { EmployeePortal } from './components/employee/EmployeePortal';
import { OwnerPortal } from './components/owner/OwnerPortal';

function App() {
  const { currentPortal } = usePortalStore();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 3D Background Elements */}
      <Background3D />

      {/* Header */}
      <Header />

      {/* Portal Toggle */}
      <PortalToggle />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPortal === 'employee' ? (
            <EmployeePortal key="employee" />
          ) : (
            <OwnerPortal key="owner" />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
