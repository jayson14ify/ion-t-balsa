import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ion-t-balsa',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
