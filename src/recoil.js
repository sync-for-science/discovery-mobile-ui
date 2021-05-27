import { atom, selector } from 'recoil';
import { memoizeWith, identity } from 'ramda';

import Storage from './storage';

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
  get: async () => Storage.getOnboardingState(),
});


export const onboardingState = memoizeWith(identity, (storageIsOnboardingComplete) => {
  const atomForOnboardingState = atom({
    key: 'atomForOnboardingState',
    default: undefined,
  });

  return selector({
    key: 'onboardingState',
    // if atomForOnboardingState is undefined aka default then use storage value
    get: ({ get }) => (get(atomForOnboardingState) === undefined
      ? storageIsOnboardingComplete
      : get(atomForOnboardingState)),
    set: ({ set }, isCompleted) => set(atomForOnboardingState, isCompleted),
  });
});

export const storageOnboardingToggleCount = selector({
  key: 'storageOnboardingToggleCount',
  get: async () => Storage.getOnboardingToggleCount(),
});

export const onboardingToggleCount = memoizeWith(identity, (storageOBToggleCount) => {
  const atomForOnboardingToggleCount = atom({
    key: 'atomForOnboardingToggleCount',
    default: undefined,
  });

  return selector({
    key: 'onboardingToggleCount',
    get: ({ get }) => (get(atomForOnboardingToggleCount) === undefined
      ? storageOBToggleCount
      : get(atomForOnboardingToggleCount)),
    set: ({ set }, newCount) => set(atomForOnboardingToggleCount, newCount),
  });
});
