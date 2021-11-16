import { combineReducers } from 'redux';
import homeBaseReducer from './home-base/homeBase.reducer';
import peopleReducer from './people/people.reducer';
import starshipsReducer from './starships/starships.reducer';

const rootReducer = combineReducers({
  people: peopleReducer,
  starships: starshipsReducer,
  homeBase: homeBaseReducer,
});

export default rootReducer;
