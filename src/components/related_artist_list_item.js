import React from 'react';


const RelatedArtistItem = ({imageUrl, artistName, onArtistSelect}) => {

	return (
			<img onClick={() => onArtistSelect(artistName)} src={imageUrl} />
		);
};

export default RelatedArtistItem;