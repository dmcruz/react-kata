import { all, call } from 'redux-saga/effects';
import { watchFetchPeopleStart } from './people/people.saga';

export default function* rootSaga() {
  yield all([call(watchFetchPeopleStart)]);
}
