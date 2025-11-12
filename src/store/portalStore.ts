import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PortalType, PortalState, UserSettings } from '../types/portal';

interface PortalStore extends PortalState {
  setPortal: (portal: PortalType) => void;
  togglePortal: () => void;
  setTransitioning: (isTransitioning: boolean) => void;
}

export const usePortalStore = create<PortalStore>()(
  persist(
    (set, get) => ({
      currentPortal: 'employee',
      isTransitioning: false,

      setPortal: (portal) => set({ currentPortal: portal }),

      togglePortal: () => {
        const current = get().currentPortal;
        set({
          isTransitioning: true,
          currentPortal: current === 'employee' ? 'owner' : 'employee',
        });

        // Reset transitioning state after animation
        setTimeout(() => {
          set({ isTransitioning: false });
        }, 700);
      },

      setTransitioning: (isTransitioning) => set({ isTransitioning }),
    }),
    {
      name: 'loopsync-portal',
    }
  )
);

interface SettingsStore extends UserSettings {
  setClaudeApiKey: (apiKey: string) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  setNotifications: (enabled: boolean) => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      claudeApiKey: null,
      theme: 'light',
      notifications: true,

      setClaudeApiKey: (apiKey) => set({ claudeApiKey: apiKey }),
      setTheme: (theme) => set({ theme }),
      setNotifications: (enabled) => set({ notifications: enabled }),
    }),
    {
      name: 'loopsync-settings',
    }
  )
);
