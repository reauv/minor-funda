import Location from 'promised-location';
import { GOOGLE_GEOCODING_API_KEY } from 'env';
import * as positionActions from 'Actions/PositionActions';

const GEOCODING_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?${GOOGLE_GEOCODING_API_KEY}`;

const navigator = (typeof window !== 'undefined') ? window.navigator : {};
const locator = new Location({ enableHighAccuracy: true }, Promise, navigator);

function reverseGeocode(latitude, longitude) {
	return fetch(`${GEOCODING_ENDPOINT}&latlng=${latitude},${longitude}`);
}

function getCity(data) {
	const key = 'administrative_area_level_2';
	const components = data.address_components;

	return components
		.find(component => component.types.indexOf(key) >= 0)
		.long_name.replace(/ /g, '').toLowerCase();
}

function getPostal(data) {
	const key = 'postal_code';
	const components = data.address_components;

	return components
		.find(component => component.types.indexOf(key) >= 0)
		.long_name.replace(/ /g, '').toLowerCase();
}

export function fetchPosition() {
	positionActions.fetchingPosition();

	return locator
		.then(position => {
			const { latitude, longitude } = position.coords;
			positionActions.fetchedPosition({ latitude, longitude });
			return { latitude, longitude };
		})
		.catch(error => {
			console.error(error);
		});
}

export function fetchPositionData() {
	positionActions.fetchingPositionData();

	return fetchPosition()
		.then(({ latitude, longitude }) => reverseGeocode(latitude, longitude))
		.then(response => response.json())
		.then(response => response.results[0])
		.then(data => {
			positionActions.fetchedPositionData({
				city: getCity(data),
				postal: getPostal(data),
			});

			return { city: getCity(data), postal: getPostal(data) };
		})
		.catch(error => {
			console.error(error);
		});
}
