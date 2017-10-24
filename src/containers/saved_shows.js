import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SavedEventListItem from '../components/saved_event_list_item';
import _ from 'lodash';

class SavedShows extends Component {

  constructor(props) {
  	super(props)
    this.showEvents = this.showEvents.bind(this);
  }

  showEvents(events) {

    const savedEventsArray = [];

      _.forOwn(events, (value, key) => {
                  

                  savedEventsArray.push(
                       <SavedEventListItem 
                        eventName={value.eventName}
                        key={value.uri}
                        location={value.location}
                        uri={value.uri}
                      />
                  )
                }
              );


      return (
          savedEventsArray
        );  

  }

  render() {

            const events = this.props.savedEvents;

            if (!_.isEmpty(events)) {
              return (
                  <div className="list-group app">
                    <h3>My Saved Shows</h3>
                    {this.showEvents(events)}
                  </div>
            )}

            return (null);
  }
}

function mapStateToProps(state) {
    return {
        city: state.city,
        savedEvents: state.savedEvents
    };
}

export default connect(mapStateToProps)(SavedShows);