import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './containers/app';
import SavedShows from './containers/saved_shows';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
   	<div>
   		<Switch>
        <Route path="/saved_shows" component={SavedShows} />
    		<Route path="/" component={App} />
     	</Switch>
   	</div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));