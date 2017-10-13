import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterCity } from '../actions/index';

class EnterCity extends Component {

	handleKeyPress = (event) => {
		if (event.key == 'Enter') {
			this.props.enterCity(event.target.value);
		}
	}

  render() {

  	return (
      <div className="enter-city">
      	<h3>live music search</h3>
      	<input 
      	placeholder='enter a city'
      	onKeyPress={this.handleKeyPress}
      	/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        city: state.city
    };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ enterCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterCity);