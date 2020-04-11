import { GET_PERSONS_BY_NAME_DATA } from '../constants/constants';
import { Actions } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonByNameListData = (name: string, globalData: Brastlewark[]): Actions => (
  {type: GET_PERSONS_BY_NAME_DATA, value: {name, globalData}});