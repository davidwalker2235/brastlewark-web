import React, { FC, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {FilterComponent} from '../../components';
import styles from './styles';
import locale from '../../shared/locale';

const AppBarComponent: FC<{}> = () => {
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    setIsOpen(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
            onKeyDown={toggleDrawer('left', true)}>
              <Typography className={classes.title} variant="h6" noWrap>
                {locale.Filter}
              </Typography>
            <SearchIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {locale.ListOfPersons}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={locale.SearchByPersonsName}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isOpen} onClose={toggleDrawer('left', false)}>
        <FilterComponent />
      </Drawer>
    </div>
  );
}

export default AppBarComponent;