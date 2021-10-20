import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ProfileButton } from '../components/ProfileButton';
import { Overview } from '../screens/Overview';
import { CryptoList } from '../screens/CryptoList';
import { theme } from '../styles/theme';

export type RootDrawerParamList = {
  CryptoList: undefined;
  Overview: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const OverviewDrawer = () => (
  <Drawer.Navigator
    initialRouteName="Overview"
    screenOptions={{
      headerTintColor: theme.colors.primary,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: theme.fonts.text400,
      },
    }}
    drawerContent={(props) => <CryptoList {...props} />}
  >
    <Drawer.Screen
      name="Overview"
      component={Overview}
      options={({ navigation }) => ({
        title: 'Hold Your Crypto',
        headerRight: () => (
          <ProfileButton
            onPress={() => {
              navigation.navigate('SelectUser');
            }}
          />
        ),
      })}
    />
  </Drawer.Navigator>
);
