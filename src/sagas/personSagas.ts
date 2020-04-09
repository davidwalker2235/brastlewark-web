import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_PERSON_DATA} from '../constants/constants';
import { hideLoading } from '../actions/loadingActions';
import { Actions } from '../interfaces/appInterfaces';
import { setPersonData } from '../actions/personActions';
import { Brastlewark } from '../interfaces/appInterfaces';
import { getPersonData } from '../shared/utils';

const getPerson = ({value}: Actions): Brastlewark => {
  return getPersonData(value.id, value.globalData);
}

// SAGAS
function* fetchGetPersonData(data: Actions) {
  try {
    const personData = yield call(getPerson, data);
    yield put(setPersonData(personData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

function* watchGetPersonData() {
  yield takeLatest(GET_PERSON_DATA, fetchGetPersonData)
}

function* personSagas() {
  yield all([
    watchGetPersonData()
  ])
}

export default personSagas;

