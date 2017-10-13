export function enterCity(city) {

	return {
		type: 'ENTER_CITY',
		payload: city
	};
}

export function enterArtist(artist) {

	return {
		type: 'ENTER_ARTIST',
		payload: artist
	};
}