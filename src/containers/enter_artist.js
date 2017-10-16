import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterArtist, fetchRelatedArtists } from '../actions/index';
import RelatedArtistList from '../components/related_artist_list';

// why did this not work?  import { RelatedArtistList } from '../components/related_artist_list';

class EnterArtist extends Component {

  constructor(props) {
    super(props)
    this.onArtistChange = this.onArtistChange.bind(this);
  }

  onArtistChange(event) {
            event.preventDefault();
            this.props.enterArtist(this.refs.artist.value);
            this.props.fetchRelatedArtists(this.props.accessToken, this.refs.artist.value);
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
                <table className="table">
                    <RelatedArtistList relatedA={this.props.relatedArtists} />
                </table>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ enterArtist, fetchRelatedArtists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterArtist);