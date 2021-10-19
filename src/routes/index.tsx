import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SelectUser } from '../screens/SelectUser';
import { Overview } from '../screens/Overview';

export type RootStackParamList = {
  SelectUser: undefined;
  Overview: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Screen name="SelectUser" component={SelectUser} />
        <Screen name="Overview" component={Overview} />
      </Navigator>
    </NavigationContainer>
  );
};
