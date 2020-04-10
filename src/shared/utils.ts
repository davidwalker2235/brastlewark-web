import { ListData, ListInfoData, Brastlewark, FriendsData } from "../interfaces/appInterfaces";

export const getProfessions = (brastlewarkData: Brastlewark[]): ListInfoData => {
  let professions: string[] = [];
  brastlewarkData && brastlewarkData.forEach((profession: Brastlewark)=>{
    professions = Array.from(new Set(professions.concat(...profession?.professions || [])));
  });

  return {listData: professions.map((name) => ({name}))};
};

export const getPersonListDataFromProfession = (data: any): ListInfoData => {
  const {name, globalData} = data;

  const listData: ListData[] = globalData
    .filter((person: Brastlewark) => person.professions
    .includes(name))
    .map(((personData: Brastlewark) => ({
      id: personData.id,
      name: personData.name,
      thumbnail: personData.thumbnail
    })));

  return {listData};
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