import React, { FC } from 'react';
import { ListProps } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';

const ProfessionsList: FC<ListProps> = ({route}) => {

  return (
    <Container>
      <div>Professional list</div>
    </Container>
	)
}

export default ProfessionsList;