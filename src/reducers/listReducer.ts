import { SET_PERSON_LIST_DATA} from '../constants/constants';
import { Actions, ListProps } from '../interfaces/appInterfaces';

const initialState: ListProps = {
  personListData: []
}

export default function listReducer(state: ListProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_PERSON_LIST_DATA:
      return { ...state, personListData: action.value.listData };
    default:
      return state;
  }
}