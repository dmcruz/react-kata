import { put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { addToHangar, addToSquad } from './homeBase.action';

// Worker Functions
function* requestAddToSquad(action: any): Generator<any, any, any> {
  // select to extract people from state
  const people = yield select((state: any) => state.people.list);
  // the triggering request comes with a personName as a payload
  const foundPerson = people.filter((p: any) => p.name === action.payload);
  // add the person to squad
  yield put(addToSquad(foundPerson));
}

function* requestAddToHangar(action: any): Generator<any, any, any> {
  const starships = yield select((state: any) => state.starships.list);
  const hangarShips = yield select((state: any) => state.homeBase.hangar);
  const hangarMaxCapacity = yield select(
    (state: any) => state.homeBase.hangarCapacity
  );
  const starshipName = action.payload;

  if (starshipName === 'Death Star') {
    message.error('Dream on! Death Star is off limits');
  } else if (hangarShips.length < hangarMaxCapacity) {
    const foundStarship = starships.filter((s: any) => s.name === starshipName);
    yield put(addToHangar(foundStarship));
    message.info(`Added to hangar: ${starshipName}`);
  } else {
    message.error('Hangar is fully occupied');
  }
}

// Watcher Functions
export function* watchRequestAddToSquad() {
  // triggering request
  yield takeLatest('REQUEST_ADD_TO_SQUAD', requestAddToSquad);
}

export function* watchRequestAddToHangar() {
  // triggering request
  yield takeLatest('REQUEST_ADD_TO_HANGAR', requestAddToHangar);
}
