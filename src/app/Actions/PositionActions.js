import { createAction } from 'redux-act';

export const fetchingPosition = createAction('Position is being fetched');
export const fetchingPositionFailed = createAction('Position failed to fetch');
export const fetchedPosition = createAction('Position fetched');

export const fetchingPositionData = createAction('Position data is being fetched');
export const fetchingPositionDataFailed = createAction('Position data failed to fetch');
export const fetchedPositionData = createAction('Position data fetched');
