import React, { FC } from 'react';
import { PersonProps } from '../../interfaces/appInterfaces';
import Typography from '@material-ui/core/Typography';

const PersonInfo: FC<PersonProps> = ({personData}) => {

  return (
    <Typography>
      Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
      vitae egestas augue. Duis vel est augue.
    </Typography>
  )
}

export default PersonInfo;