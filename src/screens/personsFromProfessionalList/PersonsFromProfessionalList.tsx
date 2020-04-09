import React, { FC } from 'react';
import { ListProps } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';

const PersonsFromProfessionalList: FC<ListProps> = ({route}) => {

  return (
    <Container>
      <div>Persons from professional</div>
    </Container>
	)
}

export default PersonsFromProfessionalList;