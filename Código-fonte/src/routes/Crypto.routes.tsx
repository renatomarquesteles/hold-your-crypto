import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CryptoList } from '../screens/CryptoList';
import { Crypto } from '../screens/Crypto';
import { theme } from '../styles/theme';
import { HomeButton } from '../components/HomeButton';

export type RootDrawerParamList = {
  Crypto: { title: string; currency: 'BTC' | 'ETH' | 'ADA' };
  CryptoList: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const CryptoDrawer = () => (
  <Drawer.Navigator
    initialRouteName="Crypto"
    screenOptions={{
      headerTintColor: theme.colors.primary,
      headerTitleStyle: { fontFamily: theme.fonts.text400 },
    }}
    drawerContent={(props) => <CryptoList {...props} />}
  >
    <Drawer.Screen
      name="Crypto"
      component={Crypto}
      options={({ route, navigation }) => ({
        title: route.params?.title || '',
        headerRight: () => <HomeButton navigation={navigation} />,
      })}
    />
  </Drawer.Navigator>
);
