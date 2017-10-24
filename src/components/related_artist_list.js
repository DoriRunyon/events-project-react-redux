import React from 'react';
import RelatedArtistItem from './related_artist_list_item';

const RelatedArtistList = (props) => {

    const artistImgRow = (artistImgList)  => {

        const artistRowList = [];

        const artistRow = artistImgList.map(artist => {

            artistRowList.push(<td key={artist.name}><RelatedArtistItem
              onArtistSelect={props.onArtistSelect}
              artistName={artist.name}
              imageUrl={artist.images[0].url}
              popularity={artist.popularity}
             /></td>);
        });

        return (
                artistRowList
        );
    }

        if (props.relatedA !== null) {

   
            return (
                    <tbody>
                        <tr>
                          {artistImgRow(props.relatedA.artists.slice(0, 5))}
                        </tr>
                        <tr>
                          {artistImgRow(props.relatedA.artists.slice(5, 10))}
                        </tr>
                        <tr>
                          {artistImgRow(props.relatedA.artists.slice(10, 15))}
                        </tr>
                        <tr>
                          {artistImgRow(props.relatedA.artists.slice(15, 20))}
                        </tr>
                    </tbody>
                );
    

   };

   return (null);
};

export default RelatedArtistList;