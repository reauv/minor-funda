import { createAction } from 'redux-act';

export const fetchingSuggestions = createAction('Suggestions are being fetched');
export const fetchingSuggestionsFailed = createAction('Suggestions failed to fetch');
export const fetchedSuggestions = createAction('Suggestions fetched');
