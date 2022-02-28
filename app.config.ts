require('dotenv/config');

const {
  EXPO_OWNER,
  EXPO_SLUG,
  BUNDLE_IDENTIFIER,
  ENDPOINTS_URL,
  CLIENT_ID,
} = process.env;

if (!(EXPO_OWNER && EXPO_SLUG && BUNDLE_IDENTIFIER && ENDPOINTS_URL && CLIENT_ID)) {
  console.log('         EXPO_OWNER exists: ', !!EXPO_OWNER);
  console.log('          EXPO_SLUG exists: ', !!EXPO_SLUG);
  console.log('  BUNDLE_IDENTIFIER exists: ', !!BUNDLE_IDENTIFIER);
  console.log('      ENDPOINTS_URL exists: ', !!ENDPOINTS_URL);
  console.log('          CLIENT_ID exists: ', !!CLIENT_ID);
  throw new Error('EXPO_OWNER, EXPO_SLUG, BUNDLE_IDENTIFIER, ENDPOINTS_URL, and CLIENT_ID must be defined.');
}

// https://docs.expo.dev/versions/latest/config/app/

const VERSION = '0.2.3';

module.exports = {
  expo: {
    name: 'Sync for Science Discovery',
    slug: EXPO_SLUG,
    owner: EXPO_OWNER,
    version: VERSION,
    icon: './assets/icon.png',
    scheme: 'https',
    extra: {
      EXPO_OWNER,
      EXPO_SLUG,
      ENDPOINTS_URL,
      CLIENT_ID,
    },
    orientation: 'portrait',
    userInterfaceStyle: 'automatic', // light vs dark mode
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
      bundleIdentifier: BUNDLE_IDENTIFIER,
      buildNumber: VERSION,
      supportsTablet: true,
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      package: BUNDLE_IDENTIFIER,
      versionCode: 5,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png', // TODO: update this with S4S icon
    },
  },
};
