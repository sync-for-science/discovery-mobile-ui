import { atom, selector } from 'recoil';
import { TokenResponseConfig } from 'expo-auth-session';
import Constants from 'expo-constants'; // eslint-disable-line import/no-extraneous-dependencies
import { Endpoint } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import { TypedBundle, EndpointOption } from '../types/s4s';
import Storage from './storage';

// eg: https://open.epic.com/Endpoints/R4
const { ENDPOINTS_URL } = Constants.manifest?.extra || {};

type TokenResponseType = TokenResponseConfig | null

export const endpointBundleState = selector({
  key: 'EndpointBundleState',
  get: async () => {
    const response = await fetch(ENDPOINTS_URL);
    const result = await response.json();
    return result as TypedBundle<Endpoint>;
  },
});

export const endpointResourcesState = selector({
  key: 'EndpointResourcesState',
  get: ({ get }) => get(endpointBundleState).entry.map(({ resource }) => resource),
});

export const endpointOptionsState = selector({
  key: 'EndpointOptionsState',
  get: ({ get }) => {
    const endpointEntries = get(endpointResourcesState);
    return endpointEntries.map((resource) => {
      const { id, name, address } = resource;
      return ({
        label: name,
        value: id,
        address,
      });
    }) as EndpointOption[];
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
  get: ({ get }) => get(selectedEndpointIdAtom),
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
