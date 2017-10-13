import React, { Component } from 'react';
import EnterCity from './enter_city';
import EnterArtist from './enter_artist';
import { connect } from 'react-redux';

class App extends Component {


  render() {

  	const city = `${this.props.city}`;
  	//this seems weird - ask JC if he knows what's going on here
  	//why do I get an error unless I turn city into a string? 

  	if (city === 'null') {
		    return (
		      <div className="app">
		      	<EnterCity />
		      </div>
		    );
		  }

	return (
		      <div className="app">
		      	<EnterArtist />
		      </div>
		    );	  

	}
}


function mapStateToProps(state) {
    return {
        city: state.city,
        artist: state.artist
    };
}

export default connect(mapStateToProps)(App);