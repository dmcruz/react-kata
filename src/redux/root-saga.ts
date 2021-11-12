import { all, call } from 'redux-saga/effects';
import {
  watchRequestAddToHangar,
  watchRequestAddToSquad,
} from './home-base/homeBase.saga';
import { watchFetchPeopleStart } from './people/people.saga';
import { watchFetchStarships } from './starships/starships.saga';

export default function* rootSaga() {
  yield all([
    call(watchFetchPeopleStart),
    call(watchFetchStarships),
    call(watchRequestAddToSquad),
    call(watchRequestAddToHangar),
  ]);
}
