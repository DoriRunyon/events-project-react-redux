import React from 'react';


const SavedEventListItem = ({eventName, location, uri }) => {

	return (
		<div className="container events-list-item">
			<div className="row">
				<ul className="col-sm-6">
					<li className="event-name">{eventName}</li>
					<li className="location">{location}</li>
					<a href={uri}><span className="glyphicon glyphicon-shopping-cart"></span>Buy Tickets</a>
				</ul>
			</div>
		</div>
		);
};

export default SavedEventListItem;