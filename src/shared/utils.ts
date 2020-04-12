import { ListData, ListInfoData, Brastlewark, FriendsData, FilterData } from "../interfaces/appInterfaces";

export const getProfessions = (brastlewarkData: Brastlewark[]): ListInfoData => {
  let professions: string[] = [];
  brastlewarkData && brastlewarkData.forEach((person: Brastlewark)=>{
    professions = Array.from(new Set(professions.concat(...person?.professions || [])));
  });

  return {listData: professions.map((name) => ({name}))};
};

export const getPersonsListByName = (data: any): ListInfoData => {
  const {name, globalData} = data;
  return globalData
    .filter((person: Brastlewark) => person.name.toUpperCase().includes(name.toUpperCase()))
    .map(({id, name, thumbnail}: Brastlewark) => ({id, name, thumbnail}));
}

export const getPersonsList = (brastlewarkData: Brastlewark[]): ListInfoData => {
  let listData: ListData[] = [];
  listData = brastlewarkData && brastlewarkData.map(({id, name, thumbnail}) => ({id, name, thumbnail}));

  return {listData};
}

export const getPersonData = (id: number, brastlewarkData: Brastlewark[]): Brastlewark => {
  return brastlewarkData.find(person => person.id === id) as Brastlewark;
}

export const getFriendsList = (friendsList: string[], brastlewarkData: Brastlewark[]): FriendsData[] => {
  const friendsListData: FriendsData[] = [];
  friendsList.forEach((friendName: string) => {
    const friendData: Brastlewark = brastlewarkData.find(person => person.name === friendName) as Brastlewark;
    friendData && friendsListData.push({id: friendData.id, thumbnail: friendData.thumbnail})
  });
  return friendsListData;
}

export const getFilterData = (globalData: Brastlewark[]): FilterData => {
  let hair_color: string[] = [];
  let professions: string[] = [];
  let ageMaxValue: number = 0;
  let ageMinValue: number = 0;
  let weightMaxValue: number = 0;
  let weightMinValue: number = 0;
  let heightMaxValue: number = 0;
  let heightMinValue: number = 0;

  globalData.forEach((person: Brastlewark) => {
    professions = Array.from(new Set(professions.concat(...person?.professions || [])));
    !hair_color.includes(person.hair_color) && hair_color.push(person.hair_color);
    if (Math.round(person.age) > ageMaxValue) ageMaxValue = Math.round(person.age);
    if (Math.round(person.age) < ageMaxValue) ageMinValue = Math.round(person.age);
    if (Math.round(person.weight) > weightMaxValue) weightMaxValue = Math.round(person.weight);
    if (Math.round(person.weight) < weightMaxValue) weightMinValue = Math.round(person.weight);
    if (Math.round(person.height) > heightMaxValue) heightMaxValue = Math.round(person.height);
    if (Math.round(person.height) < heightMaxValue) heightMinValue = Math.round(person.height);
  });

  return {hair_color, professions, ranges: {
    ageMaxValue,
    ageMinValue,
    weightMaxValue,
    weightMinValue,
    heightMaxValue,
    heightMinValue
  }}
}