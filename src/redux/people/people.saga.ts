import { call, put, takeLatest } from 'redux-saga/effects';
import { FetchHelper } from '../../services/FetchHelper';
import { SwapiUrls } from '../../services/SwapiUrls';
import { fetchPeopleError, fetchPeopleSuccess } from './people.action';

// This is a worker function responsible for fetching API and bind data to state if success or bind error if fail
export function* fetchPeopleAsync(): Generator<any, any, any> {
  try {
    const people = yield call(FetchHelper.getAll, SwapiUrls.PEOPLE);
    yield put(fetchPeopleSuccess(people));
  } catch (e: any) {
    yield put(fetchPeopleError(e));
  }
}

// This is a watcher function, once FETCH_PEOPLE_START is received, it will trigger fetchPeopleAsync
export function* watchFetchPeopleStart() {
  yield takeLatest('FETCH_PEOPLE_START', fetchPeopleAsync);
}
