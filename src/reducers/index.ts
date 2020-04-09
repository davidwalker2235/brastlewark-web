import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import homeReduder from './homeReducer';
import loadingReducer from './loadingReducer';
import listReducer from './listReducer';
import personReducer from './personReducer';

const rootReducer = (history: History) => combineReducers({
  home: homeReduder,
  loading: loadingReducer,
  list: listReducer,
  person: personReducer,
  router: connectRouter(history)
})

export default rootReducer;