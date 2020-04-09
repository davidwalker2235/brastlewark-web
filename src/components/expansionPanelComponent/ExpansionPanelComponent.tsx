import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ListRows } from '../../interfaces/appInterfaces';
import {PersonInfo} from '../';

const ExpansionPanelComponent: FC<ListRows> = ({data, panelId, panelExpanded, handleChange}) => {
  const classes = styles();
  const [panelNumber, setPanelNumber] = useState('')

  useEffect(() => {
    setPanelNumber(`panel${panelId}`);
  },[]);

  const onChange = (panelId: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    handleChange(newExpanded ? panelId : false)
  };

  return (
  <ExpansionPanel expanded={panelExpanded === panelNumber} onChange={onChange(`panel${panelId}`)}>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`panel${panelId}bh-content`}
      id={`panel${panelId}bh-header`}
    >
      {panelExpanded !== panelNumber && <Avatar alt={`panel-${data.name}-avatar`} src={data.thumbnail} />}
      <Typography className={classes.heading}>{data?.name}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <PersonInfo personData={data} />
    </ExpansionPanelDetails>
  </ExpansionPanel>
);
}

export default ExpansionPanelComponent;