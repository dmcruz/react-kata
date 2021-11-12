import { all, call } from 'redux-saga/effects';
import { watchFetchPeopleStart } from './people/people.saga';
import { watchFetchStarships } from './starships/starships.saga';

export default function* rootSaga() {
  yield all([call(watchFetchPeopleStart), call(watchFetchStarships)]);
}
