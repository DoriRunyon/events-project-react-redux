import axios from 'axios';
// const relateArtistEndpoint = `https://api.spotify.com/v1/artists/${artist_spotify_id}/related-artists`;

export const ENTER_CITY = 'ENTER_CITY';
export const ENTER_ARTIST = 'ENTER_ARTIST';
export const FETCH_RELATED_ARTISTS = 'FETCH_RELATED_ARTISTS';

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

export function fetchRelatedArtists(accessToken, currentArtist) {

	const artistRequest = `https://api.spotify.com/v1/search?q=${currentArtist}&type=artist`;
	const config = { headers: {'Authorization': `Bearer ${accessToken}` }};
	const relatedArtists = axios.get(artistRequest, config);

	return {
		type: FETCH_RELATED_ARTISTS,
		payload: relatedArtists
	};
}
