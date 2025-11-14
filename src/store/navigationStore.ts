import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Employee pages
export type EmployeePage = 'home' | 'my-feedback' | 'team-pulse' | 'help';

// Owner pages
export type OwnerPage = 'dashboard' | 'feedback-stream' | 'risk-radar' | 'ai-insights' | 'team-health' | 'settings';

interface NavigationState {
  employeePage: EmployeePage;
  ownerPage: OwnerPage;
  setEmployeePage: (page: EmployeePage) => void;
  setOwnerPage: (page: OwnerPage) => void;
}

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      employeePage: 'home',
      ownerPage: 'dashboard',

      setEmployeePage: (page) => set({ employeePage: page }),
      setOwnerPage: (page) => set({ ownerPage: page }),
    }),
    {
      name: 'loopsync-navigation',
    }
  )
);
