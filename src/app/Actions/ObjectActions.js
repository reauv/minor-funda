import { createAction } from 'redux-act';

export const fetchingNearbyObjects = createAction('Nearby objects are being fetched');
export const fetchingNearbyObjectsFailed = createAction('Nearby objects failed to fetch');
export const fetchedNearbyObjects = createAction('Nearby objects fetched');

export const searchingObjects = createAction('Searching objects');
export const searchingObjectsFailed = createAction('Objects failed to search');
export const searchedObjects = createAction('Objects searched');

export const fetchingObject = createAction('Fetching a single object');
export const fetchingObjectFailed = createAction('Fetching single object failed');
export const fetchedObject = createAction('Single object fetched');
