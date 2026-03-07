declare global {
  interface Window {
    __contentflussTrackingInit?: boolean;
    contentflussTrack?: (eventName: string, data?: Record<string, string>) => void;
  }
}

export {};
