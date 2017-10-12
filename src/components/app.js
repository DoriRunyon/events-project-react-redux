import React, { Component } from 'react';
import EnterCity from '../containers/enter_city';

export default class App extends Component {
  render() {
    return (
      <div className="app">
      	<EnterCity />
      </div>
    );
  }
}