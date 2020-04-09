import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_PERSON_LIST_DATA} from '../constants/constants';
import { getPersonsList } from '../shared/utils';
import { hideLoading } from '../actions/loadingActions';
import { setPersonListData } from '../actions/listActions';
import { Actions, ListInfoData } from '../interfaces/appInterfaces';

const getPersonsListData = ({value}: Actions): ListInfoData => {
  return getPersonsList(value) 
}

// SAGAS
function* fetchGetPersonListData(data: Actions) {
  try {
    const listData: ListInfoData = yield call(getPersonsListData, data);
    yield put(setPersonListData(listData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

// WATCHERS
function* watchGetPersonListData() {
  yield takeLatest(GET_PERSON_LIST_DATA, fetchGetPersonListData)
}

function* listSagas() {
  yield all([
    watchGetPersonListData()
  ])
}

export default listSagas;

