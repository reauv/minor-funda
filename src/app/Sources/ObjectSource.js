import _ from 'lodash';
import { FUNDA_API_KEY } from 'env';
import { fetchPositionData } from 'Sources/PositionSource';
import * as objectActions from 'Actions/ObjectActions';

const SEARCH_ENDPOINT = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/${FUNDA_API_KEY}`;
const DETAIL_ENDPOINT = `http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/${FUNDA_API_KEY}/koop`;

function fetchObjects(type = 'koop', location = '', radius = 0, filters = []) {
	const filterList = filters.join('/');
	const radiusKm = `+${radius}km`;

	return fetch(`
		${SEARCH_ENDPOINT}
		/?type=${type}&zo=/${location}/${radiusKm}/${filterList}&page=1&pagesize=25`
	)
		.then(response => response.json())
		.catch(error => _.defer(() => { throw error; }));
}

export function fetchNearbyObjects() {
	objectActions.fetchingNearbyObjects();

	return fetchPositionData()
		.then(({ city, postal }) => fetchObjects('koop', `${city}/${postal}`, 1))
		.then(response => objectActions.fetchedNearbyObjects(response));
}

export function searchObjects({ address, minPrice, maxPrice }) {
	objectActions.searchingObjects();

	return fetchObjects('koop', address, 1, [`${minPrice}-${maxPrice}`])
		.then(response => objectActions.searchedObjects(response));
}

export function fetchObject(id) {
	objectActions.fetchingObject();

	return fetch(`${DETAIL_ENDPOINT}/${id}`)
		.then(response => response.json())
		.then(response => objectActions.fetchedObject(response));
}
