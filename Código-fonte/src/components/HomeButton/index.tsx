import React from 'react';

import { IconButton } from '../IconButton';

import { Container } from './styles';

interface Props {
  navigation: any;
}

export const HomeButton = ({ navigation }: Props) => {
  return (
    <Container>
      <IconButton
        name="home"
        onPress={() => {
          navigation.navigate('OverviewDrawer', { screen: 'Overview' });
        }}
      />
    </Container>
  );
};
