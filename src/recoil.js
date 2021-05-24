import { atom, selector } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const authenticationState = atom({
  key: 'authenticationState',
  default: {
    baseUrl: null,
    authResult: null,
  },
});

const atomForRecoilOnboardingState = atom({
  key: `atomForRecoilOnboardingState`,
  default: false,
});

export const recoilOnboardingState = selector({
  key: 'recoilOnboardingState',
  get: ({get}) => get(atomForRecoilOnboardingState),
  set: ({set}, isCompleted) => set(atomForRecoilOnboardingState, isCompleted)
})
