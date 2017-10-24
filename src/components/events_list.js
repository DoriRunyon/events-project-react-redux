import React from 'react';
import EventsListItem from './events_list_item';

const EventList = (props) => {
 
      if (props.events !== null) {

        const eventsList = props.events.resultsPage.results.event;

         if (eventsList !== undefined) {

            const eventMatches = eventsList.map(event => {
                                const location = event.location.city.toLowerCase();
                                const city = props.city.toLowerCase();
                                if (location.substring(0, location.indexOf(",")) === city) {

                                  return <EventsListItem
                                              eventName={event.displayName}
                                              onEventSelect={props.onEventSelect}
                                              key={event.uri}
                                              location={event.location.city}
                                              uri={event.uri}
                                               />
                                         
                                }});

                            return (<div className="events-list">{eventMatches}</div>);

                  }}

                  return (null);

};


export default EventList;