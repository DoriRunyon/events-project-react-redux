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

function getRelatedArtists(artistId, accessToken) {
	const relatedArtistRequest = `https://api.spotify.com/v1/artists/${artistId}/related-artists`;
	const config = getConfigForSpotifyRequest(accessToken);
	return axios.get(relatedArtistRequest, config);
};

function getConfigForSpotifyRequest(accessToken) {
	return { headers: {'Authorization': `Bearer ${accessToken}` }};
};

export function fetchRelatedArtists(accessToken, currentArtist) {

	const artistRequest = `https://api.spotify.com/v1/search?q=${currentArtist}&type=artist`;
	const config = getConfigForSpotifyRequest(accessToken);
	const relatedArtists = axios.get(artistRequest, config)
		.then(response => getRelatedArtists(response.data.artists.items[0].id, accessToken));

	console.log(relatedArtists);

	return {
		type: FETCH_RELATED_ARTISTS,
		payload: relatedArtists
	};
}


