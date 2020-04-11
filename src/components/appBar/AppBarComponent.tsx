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
import logo from '../../shared/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../interfaces/appInterfaces';
import { getPersonByNameListData } from '../../actions/filterActions';

const AppBarComponent: FC<any> = ({children}) => {
  const dispatch = useDispatch();
  const globalData = useSelector((state: State) => state.home.globalData);
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    setIsOpen(open);
  };

  const onChange = (data: any) => {
    dispatch(getPersonByNameListData(data.target.value, globalData));
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
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
            <SearchIcon className={classes.filterIcon} />
          </IconButton>
          <div className={classes.title}>
            <img className={classes.logoImageTitle} alt='CoverImage' src={logo} />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={locale.SearchByPersonsName}
              onChange={onChange}
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
      {children}
    </div>
  );
}

export default AppBarComponent;