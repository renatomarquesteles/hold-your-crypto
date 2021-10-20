import React from 'react';
import { View, Text } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import { CryptoLogo } from '../../components/CryptoLogo';
import { DrawerItem } from '../../components/DrawerItem';
import { OutlinedButton } from '../../components/OutlinedButton';

import { Header, Title, Footer } from './styles';

export const CryptoList = (props: DrawerContentComponentProps) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Header>
          <Title>Lista de Criptomoedas</Title>
        </Header>
        <DrawerItem
          icon={<CryptoLogo symbol="BTC" size={30} />}
          title="Bitcoin (BTC)"
          onPress={() => {}}
        />
        <DrawerItem
          icon={<CryptoLogo symbol="ETH" size={30} />}
          title="Ethereum (ETH)"
          onPress={() => {}}
        />
        <DrawerItem
          icon={<CryptoLogo symbol="ADA" size={30} />}
          title="Cardano (ADA)"
          onPress={() => {}}
        />
      </DrawerContentScrollView>

      <Footer>
        <OutlinedButton>+ Nova Criptomoeda</OutlinedButton>
      </Footer>
    </View>
  );
};
