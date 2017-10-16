import React from 'react';

const SpotifyAuth = () => {
	return (

		<div>
			<a href="https://accounts.spotify.com/authorize?client_id=56ce08e2c89a4939a898c66e46a4a1cb&redirect_uri=http:%2F%2Flocalhost:8080%2F&scope=user-read-email&response_type=token&state=dorirunyon">Spotify Auth</a>
		</div>

		);
};

export default SpotifyAuth;