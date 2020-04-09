import { put, takeLatest, all, call } from 'redux-saga/effects';
import {GET_PERSON_LIST_DATA,
        GET_PROFESSION_LIST_DATA,
        GET_PERSON_LIST_DATA_FROM_PROFESSION} from '../constants/constants';
import { getProfessions, getPersonsList, getPersonListDataFromProfession } from '../shared/utils';
import { hideLoading } from '../actions/loadingActions';
import { setPersonListData, setProfessionListData, setPersonListDataFromProfession } from '../actions/listActions';
import { Actions, ListInfoData } from '../interfaces/appInterfaces';

const getPersonsListData = ({value}: Actions): ListInfoData => {
  return getPersonsList(value) 
}

const getProfessionsListData = ({value}: Actions): ListInfoData => {
  return getProfessions(value);
}

const getPersonListFromProfessionData = ({value}: Actions): ListInfoData => {
  return getPersonListDataFromProfession(value);
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

function* fetchGetProfessionListData(data: Actions) {
  try {
    const listData: ListInfoData = yield call(getProfessionsListData, data);
    yield put(setProfessionListData(listData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

function* fetchGetPersonListDataFromProfession(data: Actions) {
  try {
    const listData: ListInfoData = yield call(getPersonListFromProfessionData, data);
    yield put(setPersonListDataFromProfession(listData));
    yield put(hideLoading());
  } catch (e) {
    alert(e.message)
  }
};

// WATCHERS
function* watchGetPersonListData() {
  yield takeLatest(GET_PERSON_LIST_DATA, fetchGetPersonListData)
}

function* watchGetProfessionListData() {
  yield takeLatest(GET_PROFESSION_LIST_DATA, fetchGetProfessionListData)
}

function* watchGetListDataByProfession() {
  yield takeLatest(GET_PERSON_LIST_DATA_FROM_PROFESSION, fetchGetPersonListDataFromProfession)
}

function* listSagas() {
  yield all([
    watchGetPersonListData(),
    watchGetProfessionListData(),
    watchGetListDataByProfession()
  ])
}

export default listSagas;

