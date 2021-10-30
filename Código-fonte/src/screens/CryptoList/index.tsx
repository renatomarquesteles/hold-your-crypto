import React from 'react';
import { View } from 'react-native';
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
          onPress={() => {
            props.navigation.navigate('CryptoDrawer', {
              screen: 'Crypto',
              params: { title: 'Bitcoin', currency: 'BTC' },
            });
          }}
        />
        <DrawerItem
          icon={<CryptoLogo symbol="ETH" size={30} />}
          title="Ethereum (ETH)"
          onPress={() => {
            props.navigation.navigate('CryptoDrawer', {
              screen: 'Crypto',
              params: { title: 'Ethereum', currency: 'ETH' },
            });
          }}
        />
        <DrawerItem
          icon={<CryptoLogo symbol="ADA" size={30} />}
          title="Cardano (ADA)"
          onPress={() => {
            props.navigation.navigate('CryptoDrawer', {
              screen: 'Crypto',
              params: { title: 'Cardano', currency: 'ADA' },
            });
          }}
        />
      </DrawerContentScrollView>

      <Footer>
        <OutlinedButton>+ Nova Criptomoeda</OutlinedButton>
      </Footer>
    </View>
  );
};
