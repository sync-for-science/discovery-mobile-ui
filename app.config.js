import 'dotenv/config';

export default {
  expo: {
    name: 'discovery-mobile-ui',
    slug: 'discovery-mobile-ui',
    owner: 'sync-for-science',
    version: '1.0.0',
    scheme: 'https',
    extra: {
      BASE_URL: process.env.BASE_URL,
      CLIENT_ID: process.env.CLIENT_ID,
      REDIRECT_URI: process.env.REDIRECT_URI,
    },
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
