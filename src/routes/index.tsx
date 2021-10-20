import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SelectUser } from '../screens/SelectUser';
import { OverviewDrawer } from './Overview.routes';

export type RootStackParamList = {
  SelectUser: undefined;
  OverviewDrawer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelectUser"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SelectUser" component={SelectUser} />
        <Stack.Screen name="OverviewDrawer" component={OverviewDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
