import { SET_PERSON_LIST_DATA,
         SET_PERSON_LIST_DATA_FROM_PROFESSION, 
         SET_PROFESSION_LIST_DATA} from '../constants/constants';
import { Actions, ListProps } from '../interfaces/appInterfaces';

const initialState: ListProps = {
  personListData: undefined,
  professionListData: undefined,
  personsFromProfession: undefined
}

export default function listReducer(state: ListProps = initialState, action: Actions) {
  switch (action.type) {
    case SET_PERSON_LIST_DATA:
      return { ...state, personListData: action.value.listData };
    case SET_PROFESSION_LIST_DATA:
      return { ...state, professionListData: action.value.listData };
    case SET_PERSON_LIST_DATA_FROM_PROFESSION:
      return { ...state, personsFromProfession: action.value.listData };
    default:
      return state;
  }
}