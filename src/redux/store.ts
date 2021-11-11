import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import peopleReducer from './people/people.reducer';
import starshipsReducer from './starships/starships.reducer';
const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipsReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export default store;
