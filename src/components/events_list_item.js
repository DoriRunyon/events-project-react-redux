import React, { Component } from 'react';


class EventsListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
				clicked: "glyphicon glyphicon-heart-empty pull-left"
		};
		this.onHeartClick = this.onHeartClick.bind(this);
	}

	onHeartClick(event, location, uri) {

		this.props.onEventSelect({'eventName': event,
								       'location': location,
								       'uri': uri});

		this.setState({clicked: "glyphicon glyphicon-heart pull-left"});

	};

	render() {

	return (
		<div className="container events-list-item">
			<div className="row">
			<span className={this.state.clicked} 
				  onClick={() => this.onHeartClick(this.props.eventName,
											 this.props.location,
											 this.props.uri)}></span>
				<ul className="col-sm-6">
					<li className="event-name">{this.props.eventName}</li>
					<li className="location">{this.props.location}</li>
					<a href={this.props.uri}><span className="glyphicon glyphicon-shopping-cart"></span>Buy Tickets</a>
				</ul>
			</div>
		</div>
		);
   };
}

export default EventsListItem;
