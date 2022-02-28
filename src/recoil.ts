import { atom, selector } from 'recoil';
import { memoizeWith, identity } from 'ramda';
import { TokenResponseConfig } from 'expo-auth-session';
import { Endpoint } from 'fhir/r4';

import { TypedBundle } from '../types/s4s';
import Storage from './storage';

type TokenResponseType = TokenResponseConfig | null

export const endpointBundleState = selector({
  key: 'EndpointBundleState',
  get: async () => {
    const response = await fetch('https://open.epic.com/Endpoints/R4');
    const result = await response.json();
    return result as TypedBundle<Endpoint>;
  },
});

export const endpointFilterState = atom({
  key: 'EndpointFilterState',
  default: '',
});

export const filteredEndpointsState = selector({
  key: 'FilteredEndpointsState',
  get: ({ get }) => {
    const endpointEntries = get(endpointBundleState).entry;
    const searchString = get(endpointFilterState).toLowerCase();
    return endpointEntries.filter((entry) => (entry.resource.name || '').toLowerCase().includes(searchString));
  },
});

const endpointsByIdState = selector({
  key: 'SelectedEndpointId',
  get: ({ get }) => {
    const endpointEntries = get(endpointBundleState).entry;
    return new Map(endpointEntries.map((entry) => [String(entry?.resource.id), entry]));
  },
});

const selectedEndpointIdAtom = atom({
  key: 'SelectedEndpointIdAtom',
  default: '',
});

export const selectedEndpointIdState = selector({
  key: 'SelectedEndpointIdState',
  get: ({ get }) => get(selectedEndpointIdAtom) || get(endpointBundleState)?.entry[0]?.resource.id,
  set: ({ set }, id) => {
    set(selectedEndpointIdAtom, id as string);
  },
});

export const baseUrlState = selector({
  key: 'FhirEndpointBaseUrlState',
  get: ({ get }) => {
    const selectedId = get(selectedEndpointIdState) as string;
    if (selectedId) {
      const endpointsById = get(endpointsByIdState);
      const endpointEntry = endpointsById.get(selectedId as string);
      if (endpointEntry?.resource?.address) {
        return endpointEntry.resource.address;
      }
    }
    return '';
  },
});

// export const smartAuthMetadataState = atom({
//   key: 'SmartAuthMetaDataState',
//   default: null as SmartHealthMetadata, // not exported from fhir-kit-client types
// });

export const authPendingState = atom({
  key: 'AuthPendingState',
  default: false,
});

export const authenticationState = atom({
  key: 'AuthenticationState',
  default: {
    baseUrl: '',
    tokenResponse: null as TokenResponseType,
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
