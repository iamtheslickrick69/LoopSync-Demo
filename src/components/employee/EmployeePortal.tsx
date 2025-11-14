import { motion } from 'framer-motion';
import { EmployeeSidebar } from '../layout/EmployeeSidebar';
import { useNavigationStore } from '../../store/navigationStore';
import { EmployeeHome } from './pages/EmployeeHome';
import { MyFeedback } from './pages/MyFeedback';
import { TeamPulse } from './pages/TeamPulse';
import { HelpResources } from './pages/HelpResources';

export function EmployeePortal() {
  const { employeePage } = useNavigationStore();

  const renderPage = () => {
    switch (employeePage) {
      case 'home':
        return <EmployeeHome />;
      case 'my-feedback':
        return <MyFeedback />;
      case 'team-pulse':
        return <TeamPulse />;
      case 'help':
        return <HelpResources />;
      default:
        return <EmployeeHome />;
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
      <EmployeeSidebar />
      <div className="ml-64 relative z-10">
        {renderPage()}
      </div>
    </motion.div>
  );
}
