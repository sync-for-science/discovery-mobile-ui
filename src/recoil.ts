import { atom, selector } from 'recoil';
import { memoizeWith, identity } from 'ramda';
import { TokenResponse } from 'expo-app-auth';

import Storage from './storage';

type AuthResultType = TokenResponse | null

export const authenticationState = atom({
  key: 'AuthenticationState',
  default: {
    baseUrl: '',
    authResult: null as AuthResultType,
  },
});

export const storageOnboardingState = selector({
  key: 'StorageOnboardingState',
  get: async () => Storage.getOnboardingState(),
});

type isOnboarded = boolean | undefined

const atomForOnboardingState = atom({
  key: 'AtomForOnboardingState',
  default: undefined as isOnboarded,
});

// TODO: it seems unecessary and possibly buggy to memoize this selector:
// @ts-ignore
export const onboardingState = memoizeWith(identity, (storageIsOnboardingComplete) => selector({
  key: 'OnboardingState',
  // if atomForOnboardingState is undefined aka default then use storage value
  get: ({ get }) => (get(atomForOnboardingState) === undefined
    ? storageIsOnboardingComplete
    : get(atomForOnboardingState)),
  set: ({ set }, isCompleted) => set(atomForOnboardingState, isCompleted as boolean),
}));
