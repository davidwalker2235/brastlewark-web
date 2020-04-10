import React, { FC } from 'react';
import { State } from '../../interfaces/appInterfaces';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import locale from '../../shared/locale';
import { useSelector } from 'react-redux';

const PersonInfo: FC<any> = () => {
  const classes = styles();
  const personData = useSelector((state: State) => state.person.personData);

  return (
    <Card className={classes.root}>
      <Grid container justify="flex-start">
        <Grid item sm={12} md={3} lg={3}>
          <div className={classes.imageContainer}>
            <img className={classes.cover} alt="complex" src={personData?.thumbnail} />
          </div>
        </Grid>
        <Grid item sm={12} md={9} lg={9}>
          <div className={classes.details}>
            <Grid justify="space-between" container direction='column'>
              <Grid item sm={12} md={12} lg={12}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {personData?.name}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid container direction='row'>
                <Grid item sm={6} md={6} lg={6}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Age}: ${personData?.age}`}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item sm={6} md={6} lg={6}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                      Mac Miller
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {personData?.name}
              </Typography>
            </CardContent>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PersonInfo;