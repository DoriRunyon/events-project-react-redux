import React, { Component } from 'react';
import EnterCity from './enter_city';
import EnterArtist from './enter_artist';
import SpotifyAuth from '../components/spotify_auth';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { hash: this.props.location.hash };
    this.getAccessToken = this.getAccessToken.bind(this);
  }

  getAccessToken(hash) {

  	const accessToken = hash.substring(14, hash.indexOf('&token_type'));
  	return accessToken;
  }

  render() {

  	const city = `${this.props.city}`;
  	const artist = `${this.props.artist}`;

  	console.log(city, artist);

  	//this seems weird - ask JC if he knows what's going on here
  	//why do I get an error unless I turn city into a string? 

  	if (this.props.location.hash === '') {
  		return (
		      <div className="app">
		      	<SpotifyAuth />
		      </div>
		    );
		  }

  	else if (city === 'null') {
		    return (
		      <div className="app">
		      	<EnterCity />
		      </div>
		    );
		  }

	return (
		      <div className="app">
		      	<EnterArtist accessToken={this.getAccessToken(this.state.hash)}/>
		      </div>
		    );	  

	}
}


function mapStateToProps(state) {
    return {
        city: state.city,
        artist: state.artist,
        relatedArtists: state.relatedArtists
    };
}

export default connect(mapStateToProps)(App);