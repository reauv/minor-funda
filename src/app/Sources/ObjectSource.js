import _ from 'lodash';
import { FUNDA_API_KEY } from 'env';
import { fetchPositionData } from 'Sources/PositionSource';
import * as objectActions from 'Actions/ObjectActions';

const SEARCH_ENDPOINT = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/${FUNDA_API_KEY}`;

export function fetchObjects(type = 'koop', location = '', radius = 2, filters = []) {
	const filterList = filters.join('/');
	const radiusKm = `+${radius}km`;

	objectActions.fetchingNearbyObjects();

	return fetch(`
		${SEARCH_ENDPOINT}
		/?type=${type}&zo=/${location}/${radiusKm}/${filterList}&page=1&pagesize=25`
	)
		.then(response => response.json())
		.then(json => objectActions.fetchedNearbyObjects(json))
		.catch(error => _.defer(() => { throw error; }));
}

export function fetchNearbyObjects() {
	return fetchPositionData()
		.then(({ city, postal }) => fetchObjects('koop', `${city}/${postal}`, 2));
}
