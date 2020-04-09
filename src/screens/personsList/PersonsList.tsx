import React, { FC } from 'react';
import { ListProps } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';


const PersonsList: FC<ListProps> = () => {

  return (
    <Container>
      <div>Person List</div>
    </Container>
	)
}

export default PersonsList;