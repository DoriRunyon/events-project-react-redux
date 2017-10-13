import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterArtist } from '../actions/index';

class EnterArtist extends Component {

  constructor(props) {
    super(props)

    this.onArtistChange = this.onArtistChange.bind(this);
  }

  onArtistChange(event) {
            event.preventDefault();
            this.props.enterArtist(this.refs.artist.value);
    }


  render() {

    return (
        <div className="enter-artist">
        <h3>live music search: <span className="city">{this.props.city}</span></h3>
            <form 
                onSubmit={this.onArtistChange}
                className="input-group">
                <input 
                    placeholder="enter an artist"
                    className="form-control"
                    ref="artist"
                />
             <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
             </span>
            </form>
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