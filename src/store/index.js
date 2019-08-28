import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const preloadedState = {};

// try {
//   let bestScore = localStorage.getItem('bestScore');
//   if(bestScore) {
//     bestScore = JSON.parse(bestScore);
//     preloadedState.scores = { bestScore };
//   }
// } catch(e){}

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
