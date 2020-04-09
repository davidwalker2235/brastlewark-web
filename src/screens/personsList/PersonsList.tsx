import React, { FC, useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { ListProps, Brastlewark } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';
import {AppBarComponent} from '../../components';
import {State} from '../../interfaces/appInterfaces';
import styles from './styles';
import { getGlobalData } from '../../actions/homeActions';
import {ExpansionPanelComponent} from '../../components';
var Infinite = require('react-infinite');

const PersonsList: FC<ListProps> = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const personData = useSelector((state: State) => state.list.personListData)
  const [expandedPanel, setExpandedPanel] = useState<string | boolean>(false);

  useEffect(() => {
    dispatch(getGlobalData());
  },[]);

  const handleChange = (panelId: string | boolean) => {
    setExpandedPanel(panelId);
  };

  return (
    <div>
      <AppBarComponent />
      <Container className={classes.container}>
        <div className={classes.root}>
        <Infinite containerHeight={200} elementHeight={40} useWindowAsScrollContainer>
          {personData.map((person: Brastlewark, index: number) => (
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
    </div>
	)
}

export default PersonsList;