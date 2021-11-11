import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import peopleReducer from './people/people.reducer';
import starshipsReducer from './starships/starships.reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipsReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
