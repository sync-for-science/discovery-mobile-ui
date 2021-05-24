import { get } from 'react-native/Libraries/Utilities/PixelRatio';
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
// // eslint-disable-next-line import/prefer-default-export
// export const authenticationState = atom({
//   key: 'authenticationState',
//   default: {
//     baseUrl: null,
//     authResult: null,
//   },
// });

const atomForOnboardingState = atom({
  key: `atomForOnboardingState`,
  default: false,
});

export const getOnboardingState = selector({
  key: 'getOnboardingState',
  get: ({get}) => get(atomForOnboardingState),
  set: ({set}, isCompleted) => set(atomForOnboardingState, isCompleted)
})
