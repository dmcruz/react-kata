import { call, put, takeLatest } from 'redux-saga/effects';
import { FetchHelper } from '../../services/FetchHelper';
import { SwapiUrls } from '../../services/SwapiUrls';
import { fetchStarshipsSuccess, fetchStarshipsError } from './starships.action';

function* fetchPeopleAsync(): Generator<any, any, any> {
  try {
    const people = yield call(FetchHelper.getAll, SwapiUrls.STARSHIPS);
    yield put(fetchStarshipsSuccess(people));
  } catch (e: any) {
    yield put(fetchStarshipsError(e.message || e));
  }
}

export function* watchFetchStarships() {
  yield takeLatest('FETCH_STARSHIPS_START', fetchPeopleAsync);
}
