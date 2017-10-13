import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterArtist } from '../actions/index';

class EnterArtist extends Component {

    handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            this.props.enterArtist(event.target.value);
        }
    }

  render() {

    console.log(`This is the artist: ${this.props.artist}`);
    const city = `${this.props.city}`;

    return (
      <div className="enter-artist">
        <h3>live music search: {city}</h3>
        <input 
            placeholder='enter an artist'
            onKeyPress={this.handleKeyPress}
        />
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ enterArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterArtist);