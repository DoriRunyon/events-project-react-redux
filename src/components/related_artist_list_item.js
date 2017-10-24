import React from 'react';


const RelatedArtistItem = ({imageUrl, artistName, onArtistSelect, popularity}) => {

	return (
		<div>
			<img onClick={() => onArtistSelect(artistName)} src={imageUrl} />
			<p className="artist-name">{artistName}</p>
		</div>
		);
};

export default RelatedArtistItem;