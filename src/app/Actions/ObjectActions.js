import { createAction } from 'redux-act';

export const fetchingNearbyObjects = createAction('Nearby objects are being fetched');
export const fetchingNearbyObjectsFailed = createAction('Nearby objects failed to fetch');
export const fetchedNearbyObjects = createAction('Nearby objects fetched');
