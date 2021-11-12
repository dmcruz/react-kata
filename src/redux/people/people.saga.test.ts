import { call, takeLatest } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { fetchPeopleAsync, watchFetchPeopleStart } from './people.saga';
import { FetchHelper } from '../../services/FetchHelper';
import { SwapiUrls } from '../../services/SwapiUrls';
import { throwError } from 'redux-saga-test-plan/providers';

// Check the examples on: https://github.com/jfairbank/redux-saga-test-plan
describe('integration tests on People sagas', () => {
  it('should trigger fetchPeopleAsync', () => {
    const generator = watchFetchPeopleStart();
    expect(generator.next().value).toEqual(
      takeLatest('FETCH_PEOPLE_START', fetchPeopleAsync)
    );
  });
  it('fetches people API', () => {
    const mockPeople = [{ name: 'JARJAR BINX' }, { name: 'REY' }];
    return (
      expectSaga(fetchPeopleAsync)
        // mocks call to getAll PEOPLE API and returns mock result
        .provide([[call(FetchHelper.getAll, SwapiUrls.PEOPLE), mockPeople]])
        // tests that dispatching this saga will dispatch FETCH_PEOPLE_SUCCESS after getting result
        .put({
          type: 'FETCH_PEOPLE_SUCCESS',
          payload: mockPeople,
        })
        .dispatch({ type: 'FETCH_PEOPLE_START' })
        .run()
    );
  });

  it('handles error', () => {
    const error = new Error('error');
    return expectSaga(fetchPeopleAsync)
      .provide([
        [call(FetchHelper.getAll, SwapiUrls.PEOPLE), throwError(error)],
      ])
      .put({
        type: 'FETCH_PEOPLE_ERROR',
        payload: error,
      })
      .dispatch({ type: 'FETCH_PEOPLE_START' })
      .run();
  });
});
