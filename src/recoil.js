import { atom, selector } from 'recoil';

import Storage from './storage'

// eslint-disable-next-line import/prefer-default-export
export const authenticationState = atom({
  key: 'authenticationState',
  default: {
    baseUrl: null,
    authResult: null,
  },
});

export const storageOnboardingState = selector({
  key: 'storageOnboardingState',
  get: async () => await Storage.getOnboardingState()
})

const recoilAtomsCache = {};
const memoize = (f) => (...args) => {
  const cacheKey = args.join('-');
  recoilAtomsCache[cacheKey] = recoilAtomsCache[cacheKey] ?? f(...args);
  return recoilAtomsCache[cacheKey];
};

export const onboardingState = memoize((storageIsOnboardingComplete) => {
  const atomForOnboardingState = atom({
    key: 'atomForOnboardingState',
    default: undefined,
  });

  return selector({
    key: 'onboardingState',
    get: ({ get }) =>  {
      // if atomForOnboardingState is undefined aka default then use storage value
      return get(atomForOnboardingState) ? storageIsOnboardingComplete : get(atomForOnboardingState)
    },
    set: ({ set }, isCompleted) => {console.log('isCompleted', isCompleted); return set(atomForOnboardingState, isCompleted)},
  })
});
