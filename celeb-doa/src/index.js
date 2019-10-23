import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Redux Store + Middleware Import v
import { createStore, applyMiddleware } from 'redux';
//Import Provider
import {Provider} from 'react-redux';
//Reducer
import reducer from './reducer';
//Redux-thunk
import thunk from 'redux-thunk';
//Redux Logger
import logger from 'redux-logger';
//importing reactstrap for Modal

//------------------------------------------------------------------------------------------------------

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//------------------------------------------------------------------------------------------------------
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

