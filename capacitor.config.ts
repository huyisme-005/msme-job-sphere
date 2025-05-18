
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.92cba3ed58d84f7ba4375ce70634128a',
  appName: 'msme-job-sphere',
  webDir: 'dist',
  server: {
    url: 'https://92cba3ed-58d8-4f7b-a437-5ce70634128a.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'always',
  },
  android: {
    allowMixedContent: true,
  }
};

export default config;
