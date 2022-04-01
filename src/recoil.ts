import { atom, selector } from 'recoil';
import { TokenResponseConfig } from 'expo-auth-session';
import Constants from 'expo-constants'; // eslint-disable-line import/no-extraneous-dependencies
import { Endpoint } from 'fhir/r4'; // eslint-disable-line import/no-extraneous-dependencies

import { TypedBundle, EndpointOption } from '../types/s4s';

// eg: https://open.epic.com/Endpoints/R4
const { ENDPOINTS_URL } = Constants.manifest?.extra || {};

type TokenResponseType = TokenResponseConfig | null

const endpointBundleState = selector({
  key: 'EndpointBundleState',
  get: async () => {
    const response = await fetch(ENDPOINTS_URL);
    const result = await response.json();
    return result as TypedBundle<Endpoint>;
  },
});

export const searchTextState = atom({
  key: 'SearchTextAtom',
  default: '' as string,
});

export const endpointOptionsSortedState = selector({
  key: 'EndpointOptionsSortedState',
  get: ({ get }) => {
    const endpointBundle = get(endpointBundleState);
    return endpointBundle.entry
      .map(({ resource }) => {
        const { id, name, address } = resource;
        return ({
          label: name,
          value: id,
          address,
        });
      })
      .sort(({ label: l1 = '' }, { label: l2 = '' }) => (l1.toLowerCase() < l2.toLowerCase() ? -1 : 1)) as EndpointOption[];
  },
});

const endpointsByIdState = selector({
  key: 'EndpointsByIdState',
  get: ({ get }) => {
    const sortedOptions = get(endpointOptionsSortedState);
    return new Map(sortedOptions.map((options) => [String(options.value), options]));
  },
});

const selectedEndpointIdAtom = atom({
  key: 'SelectedEndpointIdAtom',
  default: '' as string,
});

export const selectedEndpointIdState = selector({
  key: 'SelectedEndpointIdState',
  get: ({ get }) => get(selectedEndpointIdAtom) as string,
  set: ({ set }, id) => {
    set(selectedEndpointIdAtom, id as string);
  },
});

export const baseUrlState = selector({
  key: 'FhirEndpointBaseUrlState',
  get: ({ get }) => {
    const selectedId = get(selectedEndpointIdState);
    if (selectedId) {
      const endpointsById = get(endpointsByIdState);
      const endpointEntry = endpointsById.get(selectedId as string);
      if (endpointEntry?.address) {
        return endpointEntry.address;
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
