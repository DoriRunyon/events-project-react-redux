import axios from 'axios';
const songkickAPIkey = `R0pYPGqavBaLpBKi`;

export const ENTER_CITY = 'ENTER_CITY';
export const ENTER_ARTIST = 'ENTER_ARTIST';
export const FETCH_RELATED_ARTISTS = 'FETCH_RELATED_ARTISTS';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENT = 'SAVE_EVENT';

export function enterCity(city) {

	return {
		type: ENTER_CITY,
		payload: city
	};
}

export function enterArtist(artist) {

	return {
		type: ENTER_ARTIST,
		payload: artist
	};
}

function getRelatedArtists(artistId, accessToken) {
	const relatedArtistRequest = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;
	const config = getConfigForSpotifyRequest(accessToken);
	return axios.get(relatedArtistRequest, config);
};

function getConfigForSpotifyRequest(accessToken) {
	return { headers: {'Authorization': `Bearer ${accessToken}` }};
};

export function fetchRelatedArtists(accessToken, currentArtist) {

	console.log(currentArtist);
	const artistRequest = `https://api.spotify.com/v1/search?q=${currentArtist}&type=artist`;
	const config = getConfigForSpotifyRequest(accessToken);
	const relatedArtists = axios.get(artistRequest, config)
		.then(response => getRelatedArtists(response.data.artists.items[0].id, accessToken));

	return {
		type: FETCH_RELATED_ARTISTS,
		payload: relatedArtists
	};
}

function getEventsCalendar(artistID) {
	const eventsCalendar = `http://api.songkick.com/api/3.0/artists/${artistID}/calendar.json?apikey=${songkickAPIkey}`;
	return axios.get(eventsCalendar);
};

export function fetchEvents(artist) {

	const artistSongkickID = `http://api.songkick.com/api/3.0/search/artists.json?query=${artist}&apikey=${songkickAPIkey}`;
	const events = axios.get(artistSongkickID)
			.then(response => getEventsCalendar(response.data.resultsPage.results.artist[0].id));

	return {
		type: FETCH_EVENTS,
		payload: events
	};
}

export function saveEvent(selectedEvent) {

	return {
		type: SAVE_EVENT,
		payload: selectedEvent
	};
}


