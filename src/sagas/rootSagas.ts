import { all } from 'redux-saga/effects';
import homeSagas from './homeSagas';
import listSagas from './listSagas';
import personSagas from './personSagas';

export default function* rootSaga() {
  yield all([
    homeSagas(),
    listSagas(),
    personSagas()
  ])
}