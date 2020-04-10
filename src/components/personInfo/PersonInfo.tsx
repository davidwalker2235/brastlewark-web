import React, { FC, useState, useEffect } from 'react';
import { State, BrastlewarkProp, FriendsData } from '../../interfaces/appInterfaces';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import locale from '../../shared/locale';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { getFriendsListData } from '../../actions/listActions';

const PersonInfo: FC<any> = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const globalData = useSelector((state: State) => state.home.globalData);
  const friendsListData = useSelector((state: State) => state.list.friendsListData);
  const personData: BrastlewarkProp = useSelector((state: State) => state.person.personData);

  useEffect(() => {
    dispatch(getFriendsListData(personData.friends || [], globalData));
  },[]);

  const getProfessions = () => (
    personData.professions?.map((profession: string) => (
      <Typography variant="subtitle1" color="textSecondary">
        {profession}
      </Typography>
    ))
  )

  const getFriends = () => (
    friendsListData.length ? friendsListData?.map((friend: FriendsData) => (
      <IconButton>
        <Avatar alt={`panel-${friend.id}-avatar`} src={friend.thumbnail} />
      </IconButton>
    )) :
    <Typography  style={{paddingLeft: 10}} variant="subtitle1" color="textSecondary">
      {locale.NoFriends}
    </Typography>
  )

  return (
    <Card className={classes.root}>
      <Grid container justify="flex-start">
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.imageContainer}>
            <img className={classes.cover} alt="complex" src={personData?.thumbnail} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className={classes.details}>
            <Grid justify="space-between" container direction='column'>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {personData?.name}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid container direction='row'>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Age}: ${personData?.age} ${(personData.age &&
                        (personData?.age > 1)) ?
                          locale.YearsOld :
                          locale.YearOld}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Weight}: ${Math.round(personData?.weight || 0)}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Height}: ${Math.round(personData?.height || 0)}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.HairColor}: `}
                      <Avatar alt={`hair-color-id-${personData.id}-${personData.hair_color}`} style={{backgroundColor: personData.hair_color}}> </Avatar>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>  
                  <CardContent className={classes.content}>
                    <Typography style={{textDecoration: 'underline'}} variant="subtitle1" color="textSecondary">
                      {`${locale.Professions}:`}
                    </Typography>
                    {getProfessions()}
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
            <CardContent className={classes.content}>
              <div className={classes.friendsThubnails}>
                <Typography component="h5" variant="h5">
                  {`${locale.Friends}: `}
                </Typography>
                {getFriends()}
              </div>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PersonInfo;