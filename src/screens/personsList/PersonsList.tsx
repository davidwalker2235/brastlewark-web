import React, { FC, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ListProps, Brastlewark } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';
import {AppBarComponent} from '../../components';
import {State} from '../../interfaces/appInterfaces';
import styles from './styles';
import { getGlobalData } from '../../actions/homeActions';
import {ExpansionPanelComponent} from '../../components';
import backgroundFog from '../../shared/images/backgroundFog.jpg';
import { getPersonData } from '../../actions/personActions';
var Infinite = require('react-infinite');

const PersonsList: FC<ListProps> = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const personsListData = useSelector((state: State) => state.list.personListData);
  const globalData = useSelector((state: State) => state.home.globalData);
  const [expandedPanel, setExpandedPanel] = useState<string | boolean>(false);

  useEffect(() => {
    dispatch(getGlobalData());
  },[]);

  const handleChange = (personId: number, panelId: string | boolean) => {
    dispatch(getPersonData(personId, globalData));
    setExpandedPanel(panelId);
  };

  return (
    <div>
      <img alt='personListBGImage' className={classes.psBackground} src={backgroundFog} />
      <AppBarComponent>
        <Container className={classes.container}>
          <div className={classes.root}>
          <Infinite containerHeight={200} elementHeight={40} useWindowAsScrollContainer>
            {personsListData.map((person: Brastlewark, index: number) => (
              <ExpansionPanelComponent
                data={person}
                key={`person${index}`}
                panelId={index}
                panelExpanded={expandedPanel}
                handleChange={handleChange}
              />
            ))}
            </Infinite>
          </div>
        </Container>
      </ AppBarComponent>
    </div>
	)
}

export default PersonsList;