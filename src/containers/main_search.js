import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterArtist, fetchRelatedArtists, enterCity, fetchEvents, saveEvent } from '../actions/index';
import RelatedArtistList from '../components/related_artist_list';
import EventsList from '../components/events_list';
import { Link } from 'react-router-dom';

// why did this not work?  import { RelatedArtistList } from '../components/related_artist_list';

class MainSearch extends Component {

  constructor(props) {
    super(props)
    this.artistChangeRequests = this.artistChangeRequests.bind(this);
    this.onArtistChange = this.onArtistChange.bind(this);
    this.onArtistChangeImg = this.onArtistChangeImg.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.onEventSave = this.onEventSave.bind(this);
  }

  componentDidMount(){
    this.refs.artist.focus();
  }

  artistChangeRequests(artist, accessToken) {
    this.props.enterArtist(artist);
    this.props.fetchRelatedArtists(accessToken, artist);
    this.props.fetchEvents(artist);
  }

  onArtistChange(event) {
    event.preventDefault();
    this.artistChangeRequests(this.refs.artist.value, this.props.accessToken);
    this.refs.artist.value = "";
  }
  
  onArtistChangeImg(artist) {
    this.artistChangeRequests(artist, this.props.accessToken);
  }

  changeCity(event) {
    this.props.enterCity(null);
  }

  onEventSave(selectedEvent) {
    this.props.saveEvent(selectedEvent);
  }

  render() {

    return (
        <div className="main-search">
          <div className="above-artist-input">
          <Link to="/saved_shows"><button className="btn pull-right">
              <span className="glyphicon glyphicon-heart"></span>My Saved Shows</button></Link>
            <h3>live music search: <span className="city" onClick={this.changeCity}>{this.props.city} + {this.props.artist}</span></h3> 
          </div>
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
                  <EventsList 
                      events={this.props.events}
                      city={this.props.city}
                      onEventSelect={selectedEvent => this.onEventSave(selectedEvent)}
                  />
                  <table className="table">
                      <RelatedArtistList 
                      onArtistSelect={selectedArtist => this.onArtistChangeImg(selectedArtist)}
                      relatedA={this.props.relatedArtists} />
                  </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        city: state.city,
        artist: state.artist,
        relatedArtists: state.relatedArtists,
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ enterArtist, enterCity, fetchRelatedArtists, fetchEvents, saveEvent }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);