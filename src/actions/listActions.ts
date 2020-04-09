import {GET_PERSON_LIST_DATA,
        GET_PROFESSION_LIST_DATA,
        GET_PERSON_LIST_DATA_FROM_PROFESSION,
        SET_PERSON_LIST_DATA_FROM_PROFESSION,
        SET_PERSON_LIST_DATA,
        SET_PROFESSION_LIST_DATA} from '../constants/constants';
import { Actions, ListInfoData } from '../interfaces/appInterfaces';
import { Brastlewark } from '../interfaces/appInterfaces';

export const getPersonListData = (personListData: Brastlewark[]): Actions => (
  {type: GET_PERSON_LIST_DATA, value: personListData});

export const setPersonListData = (personListData: ListInfoData): Actions => (
  {type: SET_PERSON_LIST_DATA, value: personListData});

export const getProfessionListData = (professionListData: Brastlewark[]): Actions => (
  {type: GET_PROFESSION_LIST_DATA, value: professionListData});

export const setProfessionListData = (professionListData: ListInfoData): Actions => (
  {type: SET_PROFESSION_LIST_DATA, value: professionListData});

export const getPersonListDataFromProfession = (name: string, globalData: Brastlewark[]): Actions => (
  {type: GET_PERSON_LIST_DATA_FROM_PROFESSION, value: {name, globalData}});

export const setPersonListDataFromProfession = (listDataFromProfession: ListInfoData): Actions => (
  {type: SET_PERSON_LIST_DATA_FROM_PROFESSION, value: listDataFromProfession});