import { atom, selector } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const authenticationState = atom({
  key: 'authenticationState',
  default: {
    baseUrl: null,
    authResult: null,
  },
});

const atomForOnboardingState = atom({
  key: 'atomForOnboardingState',
  default: false,
});

export const onboardingState = selector({
  key: 'onboardingState',
  get: ({ get }) => get(atomForOnboardingState),
  set: ({ set }, isCompleted) => set(atomForOnboardingState, isCompleted),
});
