import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterCity } from '../actions/index';

class EnterCity extends Component {

  constructor(props) {
  	super(props)
  	this.onCityChange = this.onCityChange.bind(this);
  }

  onCityChange(event) {
  			event.preventDefault();
            this.props.enterCity(this.refs.city.value);
    }


  render() {

    return (
        <div className="enter-city">
        <h3>live music search</h3>
            <form 
            	onSubmit={this.onCityChange}
            	className="input-group">
                <input 
                    placeholder="enter a city"
                    className="form-control"
                    ref="city"
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
        city: state.city
    };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ enterCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterCity);