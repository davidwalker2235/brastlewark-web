import React, { FC } from 'react';
import { ListProps } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';
import {AppBarComponent} from '../../components';


const PersonsList: FC<ListProps> = () => {

  return (
    <div>
    <AppBarComponent />>
    <Container>
      <div>Person List</div>
    </Container>
    </div>
	)
}

export default PersonsList;