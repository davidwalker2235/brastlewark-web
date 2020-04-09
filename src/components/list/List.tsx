import React, { FC } from 'react';
import { ListProps } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';

const ListScreen: FC<ListProps> = ({listType, listData, onClickRow}) => {

  return (
    <Container>
      list
    </Container>
	)
}

export default ListScreen;