import React, { FC } from 'react';
import { PersonProps } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';

const Person: FC<PersonProps> = () => {

	return (
    <Container>
      <div>Person</div>
    </Container>
	)
}

export default Person;