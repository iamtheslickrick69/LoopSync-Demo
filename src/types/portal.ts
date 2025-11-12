export type PortalType = 'employee' | 'owner';

export interface PortalState {
  currentPortal: PortalType;
  isTransitioning: boolean;
}

export interface UserSettings {
  claudeApiKey: string | null;
  theme: 'light' | 'dark';
  notifications: boolean;
}
